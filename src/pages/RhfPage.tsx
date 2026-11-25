import {  useEffect, useState } from "react"
import axios from "axios"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"


const RhfPage = () => {
    const base = "https://to-dos-api.softclub.tj"
    const api = `${base}/api/to-dos`


    const [data, setData] = useState<any[]>([])
    const [modalAdd, setModalAdd] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [editId, setEditId] = useState("")

    
    
    const addSchema = z.object({
        name: z.string().min(2, "Минимум 2 символа"),
        description: z.string().min(5, "Минимум 5 символов"),
        file: z.any().refine((files) => files?.length > 0, "Выберите картинку"),
    })
    
    const editSchema = z.object({
        name: z.string().min(2, "Минимум 2 символа"),
        description: z.string().min(5, "Минимум 5 символов"),
    })
    
    const addForm = useForm({ resolver: zodResolver(addSchema) })
    const editForm = useForm({ resolver: zodResolver(editSchema) })



    async function editData(values:any) {
        try {
            await axios.put(api,{
                id: editId,
                Name:values.name,
                Description: values.description
            })
            setModalEdit(false)
            getData()
        } catch (error) {
            console.error(error);  
        }
    }


     const openEdit = (el: any) => {
    setEditId(el.id)
    editForm.reset({ name: el.name, description: el.description })
    setModalEdit(true)
  }



    async function addData(values: any) {
        const formData = new FormData()
        try {
            formData.append("Name", values.name)
            formData.append("Description", values.description)
            formData.append("Images", values.file[0])
            await axios.post(api,formData)
            setModalAdd(false)
            addForm.reset()
            getData()
        } catch (error) {
            console.error(error);
        }
    }



async function deleteData(id:number) {
    try {
        await axios.delete(api, {params: {id}})
        getData()
    } catch (error) {
        console.error(error);
    }
}


    async function getData() {
        try {
            const {data}= await axios.get(api)
            setData(data.data)
        } catch (error) {
            console.error(error);
        }
    }






    useEffect(()=>{
        getData()
    },[])

  return (
    <div>

        <Button onClick={()=> setModalAdd(true)} >Add New user</Button>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((el) => (
          <TableRow key={el.id}>
            <TableCell>
                <img className="w-[60px] rounded-2xl" src={`${base}/images/${el.images[0]?.imageName}`} alt="" />
            </TableCell>
            <TableCell>{el.name}</TableCell>
            <TableCell>{el.isCompleted?"Online":"Offline"}</TableCell>
            <TableCell>{el.description}</TableCell>
            <TableCell>
                <Button onClick={()=> deleteData(el.id)}  variant="destructive">Delete</Button>
                <Button onClick={()=> openEdit(el)}>Edit</Button>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>


         <Dialog open={modalAdd} onOpenChange={setModalAdd}>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={addForm.handleSubmit(addData)} className="grid gap-4">
            <DialogHeader>
              <DialogTitle>Add Service</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...addForm.register("name")} />
                {addForm.formState.errors.name && (
                  <p className="text-red-500 text-sm">{addForm.formState.errors.name.message as string}</p>
                )}
              </Field>
              <Field>
                <Label htmlFor="description">Description</Label>
                <Input id="description" {...addForm.register("description")} />
                {addForm.formState.errors.description && (
                  <p className="text-red-500 text-sm">{addForm.formState.errors.description.message as string}</p>
                )}
              </Field>
              <Field>
                <Label htmlFor="file">Image</Label>
                <Input id="file" type="file" {...addForm.register("file")} />
                {addForm.formState.errors.file && (
                  <p className="text-red-500 text-sm">{addForm.formState.errors.file.message as string}</p>
                )}
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>


                <Dialog open={modalEdit} onOpenChange={setModalEdit}>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={editForm.handleSubmit(editData)} className="grid gap-4">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...editForm.register("name")} />
                {editForm.formState.errors.name && (
                  <p className="text-red-500 text-sm">{editForm.formState.errors.name.message as string}</p>
                )}
              </Field>
              <Field>
                <Label htmlFor="description">Description</Label>
                <Input id="description" {...editForm.register("description")} />
                {editForm.formState.errors.description && (
                  <p className="text-red-500 text-sm">{editForm.formState.errors.description.message as string}</p>
                )}
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>


    </div>
  )
}

export default RhfPage
