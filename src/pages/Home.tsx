import { useEffect, useState } from "react"
import axios from "axios"
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

const Home = () => {
  const api = "https://to-dos-api.softclub.tj/api/to-dos"
  const base = "https://to-dos-api.softclub.tj"
  const [data, setData] = useState([])

  const [modalAdd, setModalAdd] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const [modalEdit, setModalEdit] = useState(false)
  const [editId, setEditId] = useState(0)



 const openEdit = (el: any) => {
  setEditId(el.id)
  setName(el.name)
  setDescription(el.description)
  setModalEdit(true)
}


async function editData() {
  try {
    await axios.put(api, { id: editId, name, description })
    setModalEdit(false)
    getData()
  } catch (error) {
    console.error(error)
  }
}




  const openAdd=()=>{
    setModalAdd(true)
    setFile(null)
    setName("")
    setDescription("")
  }


  async function addData() {
  try {
    const formData = new FormData()
    formData.append("Name", name)
    formData.append("Description", description)
    if (file) formData.append("Images", file)

    await axios.post(api, formData)
    setModalAdd(false)
    getData()
  } catch (error) {
    console.error(error)
  }
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
    <div className="max-w-[1200px] m-auto py-10">
      <nav className="flex justify-between">
        <div></div>
        <div className="flex gap-10">
            <p>Home</p>
            <p>Booking</p>
            <p>Facilities</p>
            <p>About Us</p>
            <p>Location</p>
            <p>Contact</p>
        </div>
        <button className="bg-[#24AB70] text-white border-[#24AB70] px-6 py-1 rounded-2xl">Login</button>
      </nav>


      <section className="mt-20">
        <img src="./src/images/Header - 1.png" alt="" />
      </section>


      <section>
        <div>
         <div>
          <h1>Our most popular Hotels</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         </div>
          <Button onClick={openAdd}>Add New User</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {data.map((el) => {
            return (
               <div key={el.id}>
                 <img className="w-[300px]" src={`${base}/images/${el.images[0]?.imageName}`}  alt=""/>
                 <h1>{el.name}</h1>
                 <p>{el.description}</p>
                 <div>
                  <Button onClick={()=> deleteData(el.id)} variant="destructive">Delete</Button>
                  <Button onClick={()=>openEdit(el)}>Edit</Button>
                 </div>
               </div>
           )
          })}
        </div>
      </section>


      {
        modalAdd && (
         <Dialog open={modalAdd} onOpenChange={setModalAdd}>
  <DialogContent className="sm:max-w-sm">
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addData()
      }}
      className="grid gap-4"
    >
      <DialogHeader>
        <DialogTitle>Add Hotel</DialogTitle>
      </DialogHeader>

      <FieldGroup>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </Field>
        <Field>
          <Label htmlFor="description">Description</Label>
          <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        </Field>
        <Field>
          <Label htmlFor="file">Image</Label>
          <Input id="file" type="file" onChange={(e) => setFile(e.target.files)} required />
        </Field>
      </FieldGroup>

      <DialogFooter>
        <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
        <Button type="submit">Submit</Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
        )
      }



      {
        modalEdit && (
         <Dialog open={modalEdit} onOpenChange={setModalEdit}>
  <DialogContent className="sm:max-w-sm">
    <form
      onSubmit={(e) => {
        e.preventDefault()
        editData()
      }}
      className="grid gap-4"
    >
      <DialogHeader>
        <DialogTitle>Edit Hotel</DialogTitle>
      </DialogHeader>

      <FieldGroup>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </Field>
        <Field>
          <Label htmlFor="description">Description</Label>
          <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        </Field>
      </FieldGroup>

      <DialogFooter>
        <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
        <Button type="submit">Save</Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
        )
      }


      <section className="flex flex-col gap-50 m-auto">
        <img src="./src/images/Hotel Facilities.png" alt="" />
        <img src="./src/images/About Us.png" alt="" />
        <img src="./src/images/Testimonial.png" alt="" />
        <img src="./src/images/Company location & contact.png" alt="" />
        <img src="/src/images/Footer 1.png" alt="" />
      </section>

    </div>
  )
}

export default Home
