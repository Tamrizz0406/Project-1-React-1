import users from "../images/clients.png" 
import robot from "../images/robot area.png" 
import zoom from "../images/Companies.png" 
import log from "../images/Group 22.png" 
import foot from "../images/Footer Section.png" 
import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
 import { useFormik } from 'formik';


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



const FormikPage = () => {
  const base = "https://to-dos-api.softclub.tj"
  const api = `${base}/api/to-dos`
  const [data, setData] = useState<any[]>([])
  
  const [modalAdd, setModalAdd] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const [modalEdit, setModalEdit] = useState(false)
  const [editId, setEditId] = useState(0)



  const formik = useFormik({
     initialValues: { name: "",description: ""},
     onSubmit: async (values) => {
       try {
        const formData = new FormData()
        formData.append("Name",values.name)
        formData.append("Description",values.description)
        formData.append("Images",file!)
        await axios.post(api, formData)
        formik.resetForm()
        setFile(null)
        setModalAdd(false)
        getData()
       } catch (error) {
        console.error(error);
        
       }
     },
   });


    const editForm = useFormik({
    initialValues: { name: "", description: "" },
    onSubmit: async (values) => {
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
    },
  })

  const openEdit = (el: any) => {
    setEditId(el.id)
    editForm.setValues({ name: el.name, description: el.description })
    setModalEdit(true)
  }



  async function deleteData(id:number) {
    try {
      await axios.delete(api, {params:{id}})
      getData()
    } catch (error) {
      console.error(error);
      
    }
  }


  async function getData() {
    try {
      const {data} = await axios.get(api)
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
    <div className="flex items-center justify-between max-w-[1200px] m-auto">
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-7xl font-bold text-white">Transforming Data <br /> into   Decisions</h1>
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


<div>
  <div className="max-w-[1200px] m-auto">
    <Button onClick={()=> setModalAdd(true)} className="text-white " variant="ghost">Add New Course</Button>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] m-auto">
    {
        data.map((el)=>{
          return <div key={el.id}>
              <div className="bg-[#141414] p-4 flex flex-col items-center gap-10">
                <img className="h-[260px]  object-contain" src={`${base}/images/${el.images[0]?.imageName}`} alt=""/>
                <h2 className="text-3xl text-white">{el.name}</h2>
                <p className="text-white text-center">{el.description}</p>
                <div className="flex items-center">
                <Button onClick={()=> deleteData(el.id)} variant="destructive">Delete</Button>
                 <Button variant="outline" className="text-black" onClick={() => openEdit(el)}>
                    Edit
                  </Button>

                </div>
              </div>
          </div>
        })
      }

      </div>

</div>



     <Dialog open={modalAdd} onOpenChange={setModalAdd}>
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={formik.handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Service</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formik.values.name} onChange={formik.handleChange} required />
              </Field>
              <Field>
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" value={formik.values.description} onChange={formik.handleChange} required />
              </Field>
              <Field>
                <Label htmlFor="file">Image</Label>
                <Input id="file" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
              </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Submit</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
 


 <Dialog open={modalEdit} onOpenChange={setModalEdit}>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={editForm.handleSubmit} className="grid gap-4">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="edit-name">Name</Label>
                <Input id="edit-name" name="name" value={editForm.values.name} onChange={editForm.handleChange} required />
              </Field>
              <Field>
                <Label htmlFor="edit-description">Description</Label>
                <Input id="edit-description" name="description" value={editForm.values.description} onChange={editForm.handleChange} required />
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

export default FormikPage
