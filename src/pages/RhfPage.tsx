import users from "../images/clients.png"
import robot from "../images/robot area.png"
import zoom from "../images/Companies.png"
import log from "../images/Group 22.png"
import foot from "../images/Footer Section.png"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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

const RhfPage = () => {
  const base = "https://to-dos-api.softclub.tj"
  const api = `${base}/api/to-dos`
  const [data, setData] = useState<any[]>([])

  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [editId, setEditId] = useState(0)

  const addForm = useForm()
  const editForm = useForm()

  async function getData() {
    try {
      const { data } = await axios.get(api)
      setData(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteData(id: number) {
    try {
      await axios.delete(api, { params: { id } })
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  async function addData(values: any) {
    try {
      const formData = new FormData()
      formData.append("Name", values.name)
      formData.append("Description", values.description)
      formData.append("Images", values.file[0])
      await axios.post(api, formData)
      addForm.reset()
      setModalAdd(false)
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  async function editData(values: any) {
    try {
      await axios.put(api, {
        id: editId,
        name: values.name,
        description: values.description,
      })
      setModalEdit(false)
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  const openEdit = (el: any) => {
    setEditId(el.id)
    editForm.reset({ name: el.name, description: el.description })
    setModalEdit(true)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between max-w-[1200px] m-auto">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-7xl font-bold text-white">Transforming Data <br /> into Decisions</h1>
          <p className="text-white">Leverage the power of machine learning and AI to unlock <br /> insights and drive business growth</p>
          <button className="text-white bg-[#0A84FF] px-6 py-2 rounded-[8px] cursor-pointer">Book a Meeting</button>
          <img src={users} alt="" />
        </div>
        <img className="w-[700px]" src={robot} alt="" />
      </div>

      <div className="max-w-[1200px] m-auto">
        <img src={zoom} alt="" />
      </div>

      <h1 className="text-4xl text-center text-white py-20">Our Ultimate Set of Services for Your <br /> Ideas Implementation</h1>

      <div className="max-w-[1200px] m-auto">
        <Button onClick={() => { addForm.reset(); setModalAdd(true) }} className="text-white" variant="ghost">
          Add New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] m-auto">
        {data.map((el) => {
          return (
            <div key={el.id} className="bg-[#141414] p-4 flex flex-col items-center gap-10">
              <img className="h-[260px] object-contain" src={`${base}/images/${el.images[0]?.imageName}`} alt="" />
              <h2 className="text-3xl text-white">{el.name}</h2>
              <p className="text-white text-center">{el.description}</p>
              <div className="flex items-center gap-3">
                <Button onClick={() => deleteData(el.id)} variant="destructive">Delete</Button>
                <Button variant="outline" className="text-black" onClick={() => openEdit(el)}>Edit</Button>
              </div>
            </div>
          )
        })}
      </div>

      <Dialog open={modalAdd} onOpenChange={setModalAdd}>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={addForm.handleSubmit(addData)} className="grid gap-4">
            <DialogHeader>
              <DialogTitle>Add Service</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...addForm.register("name", { required: true })} />
              </Field>
              <Field>
                <Label htmlFor="description">Description</Label>
                <Input id="description" {...addForm.register("description", { required: true })} />
              </Field>
              <Field>
                <Label htmlFor="file">Image</Label>
                <Input id="file" type="file" {...addForm.register("file", { required: true })} />
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
              <DialogTitle>Edit Service</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="edit-name">Name</Label>
                <Input id="edit-name" {...editForm.register("name", { required: true })} />
              </Field>
              <Field>
                <Label htmlFor="edit-description">Description</Label>
                <Input id="edit-description" {...editForm.register("description", { required: true })} />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col items-center gap-10 py-20">
        <h1 className="text-4xl text-white text-center">Why Choose Us</h1>
        <img src={log} alt="" />
      </div>

      <footer className="max-w-[1200px] m-auto">
        <img src={foot} alt="" />
      </footer>
    </div>
  )
}

export default RhfPage