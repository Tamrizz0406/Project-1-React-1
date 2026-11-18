import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

import axios from "axios"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const App = () => {
  const api = "https://69b55733be587338e715a58f.mockapi.io/Figma"
  const [data, setData] = useState([])

  const [modalAdd, setModalAdd] = useState(false)
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [age, setAge] = useState("")
  const [status, setStatus] = useState(false)
  const [phone, setPhone] = useState("")

  const [modalEdit, setModalEdit] = useState(false)
  const [editId, setEditId] = useState("")

  const [modalInfo, setModalInfo] = useState(false)



  const [search, setSearch] = useState("")
  const [searchStat, setSearchStat] = useState("All")


  async function searchUser(value:string) {
    try {
      const {data}= await axios.get(api, {params :{name:value}})
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }
  
  async function searchStatus(value:string) {
    console.log(value);
    
    try {
      if(value === "All"){
        getData()
        return
      }
      const {data}= await axios.get(api, {params :{status:value === "Active"},})

      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

    async function editData() {
    try {
      await axios.put(`${api}/${editId}`, {avatar, name,age,price,status,phone})
      setModalEdit(false)
      getData()
    } catch (error) {
      console.error(error);
    }
  }



  const openEdit=(el:any)=>{
    setModalEdit(true)
    setAvatar(el.avatar)
    setName(el.name)
    setPrice(el.price)
    setAge(el.age)
    setStatus(el.status? "Active":"Inactive")
    setPhone(el.phone)
    setEditId(el.id)
  }

  const openInfo=(el:any)=>{
    setModalInfo(true)
    setAvatar(el.avatar)
    setName(el.name)
    setPrice(el.price)
    setAge(el.age)
    setStatus(true)
    setPhone(el.phone)

  }


  const openAdd=()=>{
    setModalAdd(true)
    setAvatar("")
    setName("")
    setPrice("")
    setAge("")
    setStatus("")
    setPhone("")
  }


  async function addData() {
    try {
      await axios.post(api, {avatar, name,age,price,status,phone})
      setModalAdd(false)
      getData()
    } catch (error) {
      console.error(error);
    }
  }





  async function deleteData(id:number) {
    try {
      await axios.delete(`${api}/${id}`)
      getData()
    } catch (error) {
      console.error(error);
      
    }
  }


  async function getData() {
    try {
      const {data} = await axios.get(api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }





  useEffect(()=>{
    getData()
  },[])





  return (
    <div>
      <div className="max-w-[1200px] m-auto p-10 flex">
        <Button onClick={openAdd} >Add New User</Button>
        <Input placeholder="Search..." value={search} onChange={(e)=> {searchUser(e.target.value), setSearch(e.target.value)}}/>
        <Select
            value={searchStat}
            onValueChange={(value) => {
             setSearchStat(String(value))
            searchStatus(String(value))
         }}
        >
        <SelectTrigger className="w-[150px]">
        <SelectValue />
      </SelectTrigger>
        <SelectContent>
      <SelectItem value="All">All</SelectItem>
      <SelectItem value="Active">Active</SelectItem>
      <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectContent>
          </Select>
      </div>
    <div>
      <Table className="w-[80%] m-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((el) => (
          <TableRow key={el.id}>
            <TableCell>
              <div className="flex">
                <img className="w-[60px] rounded-[50%]" src={el.avatar} alt="" />
                <h1>{el.name}</h1>
              </div>
              </TableCell>
            <TableCell className="text-center">{el.age}</TableCell>
            <TableCell className="text-center">{el.status?"Active":"Inactive"}</TableCell>
            <TableCell>{el.price}</TableCell>
            <TableCell>{el.phone}</TableCell>
            <Button onClick={()=> deleteData(el.id)} variant="destructive">Delete</Button>
            <Button onClick={()=> openEdit(el)} variant="secondary">Edit</Button>
            <Button onClick={()=> openEdit(el)}>Info</Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>


        {
          modalAdd && (
            <Dialog open={modalAdd} onOpenChange={setModalAdd}>
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={(e)=>{
        e.preventDefault()
        addData()
      }}>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Name" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} onChange={(e)=> setAvatar(e.target.value)} id="username-1" placeholder="URL Link" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} onChange={(e)=> setPrice(e.target.value)} id="username-1" placeholder="$$" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Status</Label>
              <Input value={status} onChange={(e)=> setStatus(e.target.value)} id="username-1" placeholder="(true / false)" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} onChange={(e)=> setAge(e.target.value)} id="username-1" placeholder="(... years old)" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Phone</Label>
              <Input value={phone} onChange={(e)=> setPhone(e.target.value)} id="username-1" placeholder="phone number" required />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
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
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={(e)=>{
        e.preventDefault()
        editData()
      }}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Name" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} onChange={(e)=> setAvatar(e.target.value)} id="username-1" placeholder="URL Link" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} onChange={(e)=> setPrice(e.target.value)} id="username-1" placeholder="$$" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Status</Label>
              <Input value={status} onChange={(e)=> setStatus(e.target.value)} id="username-1" placeholder="(Active / Inactive)" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} onChange={(e)=> setAge(e.target.value)} id="username-1" placeholder="(... years old)" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Phone</Label>
              <Input value={phone} onChange={(e)=> setPhone(e.target.value)} id="username-1" placeholder="phone number" required />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
          )
        }


        {
          modalInfo && (
            <Dialog open={modalInfo}>
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={(e)=>{
        e.preventDefault()
        setModalEdit(false)
      }}>
          <DialogHeader>
            <DialogTitle>Info</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name}  id="name"  />
            </Field>
            <Field>
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} id="username-1"   />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} id="username-1"  />
            </Field>
            <Field>
              <Label htmlFor="username-1">Status</Label>
              <Input value={status} id="username-1"  />
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} id="username-1"  />
            </Field>
            <Field>
              <Label htmlFor="username-1">Phone</Label>
              <Input value={phone} id="username-1"  />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button onClick={()=> setModalInfo(false)} variant="outline">Cancel</Button>} />
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
          )
        }
        
    </div>
    </div>
  )
}

export default App
