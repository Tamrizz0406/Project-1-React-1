import { useEffect, useState } from "react"
import axios from "axios"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"


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
  SelectGroup,
  SelectItem,
  SelectLabel,
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


  const [editModal, setModalEdit] = useState(false)
  const [editId, setEditId] = useState("")

  const [search, setSearch] = useState("")
  const [searchStat, setSearchStat] = useState("All")


  async function searchUser(value:string) {
    try {
      const{data}= await axios.get(api, {params: {name:value}})
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }


  async function searchStatus(value:string) {
    try {
      if(value === "All"){
        getData()
        return
      }
      const{data}= await axios.get(api, {params: {status:value === "Active"},})
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }


  const openEdit = (el:any)=>{
    setModalEdit(true)
    setAvatar(el.avatar)
    setName(el.name)
    setPrice(el.price)
    setAge(el.age)
    setEditId(el.id)
    setStatus(el.status)
  }

  async function editData() {
    try {
      await axios.put(`${api}/${editId}`, {avatar,name,price,age,status})
      setModalEdit(false)
      getData()
    } catch (error) {
      console.error(error);
    }
  }



  const openAdd = ()=>{
    setModalAdd(true)
    setAvatar("")
    setName("")
    setPrice("")
    setAge("")
    setStatus(false)
  }


  async function addData() {
    try {
      await axios.post(api, {avatar,name,price,age,status})
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
      console.error();
    }
  }

  async function getData() {
    try {
      const { data } = await axios.get(api)
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="flex max-w-[1200px] m-auto p-10">
        <Button onClick={openAdd}>Add New User</Button>
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
    <div className="max-w-[1200px] m-auto p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((el) => {
            return (
              <TableRow key={el.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img className="w-[60px] rounded-full" src={el.avatar} alt="" />
                    <span>{el.name}</span>
                  </div>
                </TableCell>
                <TableCell>{el.price}</TableCell>
                <TableCell>{el.status ? "Active" : "Inactive"}</TableCell>
                <TableCell>{el.age}</TableCell>
                <TableCell>
                  <Button onClick={()=> deleteData(el.id)} variant="destructive">Delete</Button>
                  <Button onClick={()=> openEdit(el)}>Edit</Button>
                </TableCell>
              </TableRow>
            )
          })}
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
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Name" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} onChange={(e)=> setAvatar(e.target.value)} id="avatar" placeholder="URL Link" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} onChange={(e)=> setPrice(e.target.value)} id="price" placeholder="$$$$" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Status</Label>
              <Input value={status} onChange={(e)=> setStatus(e.target.value)} id="stat" placeholder="Active / Inactive" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} onChange={(e)=> setAge(e.target.value)} id="age" placeholder="(...) years old" required/>
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
            editModal && (
              <Dialog open={editModal} onOpenChange={setModalEdit}>
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={(e)=>{
        e.preventDefault()
        editData()
      }}>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Name" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} onChange={(e)=> setAvatar(e.target.value)} id="avatar" placeholder="URL Link" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} onChange={(e)=> setPrice(e.target.value)} id="price" placeholder="$$$$" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Status</Label>
              <Input value={status} onChange={(e)=> setStatus(e.target.value)} id="stat" placeholder="Active / Inactive" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} onChange={(e)=> setAge(e.target.value)} id="age" placeholder="(...) years old" required/>
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


    </div>
    </div>
  )
}

export default App