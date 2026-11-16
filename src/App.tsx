import { useEffect, useState } from "react"

import axios from "axios"
import { Button } from "@/components/ui/button"



import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"







const App = () => {
  const api = "https://69b55733be587338e715a58f.mockapi.io/Card1"
  const [data, setData]= useState([])


  async function getData() {
    try {
      const {data} = await axios.get(api)
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }


async function deleteData(id:number) {
  try {
    await axios.delete(`${api}/${id}`)
  } catch (error) {
    console.error(error); 
  }
  getData()
}


const [modalAdd, setModalAdd] = useState(false)
const [modalEdit, setModalEdit] = useState(false)
const [editId, setEditId] = useState(0)
const [avatar, setAvatar] = useState("")
const [name, setName] = useState("")
const [city, setCity] = useState("")
const [phone, setPhone] = useState("")
const [email, setEmail] = useState("")


const [search, setSearch] = useState("")
const [searchStat, setSearchStat] = useState("All")



async function addData() {
  try {
    await axios.post(api, { avatar, name, city, email, phone })
    setModalAdd(false)
    getData()
  } catch (error) {
    console.error(error)
  }
}

const openData = ()=>{
  setAvatar("")
  setName("")
  setCity("")
  setEmail("")
  setPhone("")
  setModalAdd(true)

}
const openEdit = (el:any)=>{
  setAvatar(el.avatar)
  setEditId(el.id)
  setName(el.name)
  setCity(el.city)
  setEmail(el.email)
  setPhone(el.phone)
  setModalEdit(true)
}



async function editData() {
  try {
    await axios.put(`${api}/${editId}`,{ avatar, name, city, email, phone })
    setModalEdit(false)
    getData()
  } catch (error) {
    console.error(error)
  }
}



async function searchUser(value:string) {
  try {
    const {data} = await axios.get(api,{params:{name:value}})
    setData(data)
  } catch (error) {
    console.error(error);
    setData([])
  }
}








  useEffect(()=>{
    getData()
  },[])


  return (
    
    <div className="flex flex-wrap max-w-[1200px] m-auto justify-between">
      <div>
        <Button onClick={openData} variant="ghost">Add User</Button>
        <Input value={search} onChange={(e)=> {setSearch(e.target.value), searchUser(e.target.value) }}  placeholder="Search..."/>
      </div>
      {
        data.map((el)=>{
          return <div key={el.id} className="border-1 w-[300px]">
            <div>
              <img className="w-[200px]" src={el.avatar} alt="" />
              <h1 className="text-2xl font-bold">{el.name}</h1>
              <h2 className="text-gray-400">{el.email}</h2>
            </div>
              <p className="font-bold">{el.city}</p>
            <div>
              
              <Button onClick={()=>deleteData(el.id)} variant="destructive">Delete</Button>
              <Button onClick={()=> openEdit(el)} variant="secondary">Edit</Button>
            </div>
          </div>
        })
      }

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
        <DialogTitle>Add New User</DialogTitle>
        <DialogDescription>
          Fill in the fields and click Add.
        </DialogDescription>
      </DialogHeader>

      <FieldGroup>
        <Field>
          <Label htmlFor="avatar">Avatar URL</Label>
          <Input id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
        </Field>
      </FieldGroup>

      <DialogFooter>
        <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
        <Button type="submit">Add</Button>
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
        <DialogTitle>Edit User</DialogTitle>
      </DialogHeader>

      <FieldGroup>
        <Field>
          <Label htmlFor="avatar">Avatar</Label>
          <Input id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
        </Field>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Field>
        <Field>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </Field>
        <Field>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
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

    </div>

  )
}





export default App
