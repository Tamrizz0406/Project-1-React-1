import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const App = () => {
  const api = "https://69b55733be587338e715a58f.mockapi.io/Figma"
  const [data, setData] = useState([])

  const [modalAdd, setModalAdd] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [editId, setEditId] = useState("")


  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [status, setStatus] = useState(true)
  const [age, setAge] = useState("")



  const [search, setSearch] = useState("")
  const [searchStat, setSearchStat] = useState("All")

  async function getData() {
    try {
      const {data} = await axios.get(api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }




  const openAdd=()=>{
    setModalAdd(true)
    setAvatar("")
    setAge("")
    setName("")
    setPrice("")
    setStatus(true)
  }
  
  const openEdit=(el:any)=>{
    setModalEdit(true)
    setEditId(el.id)
    setAvatar(el.avatar)
    setAge(el.age)
    setName(el.name)
    setPrice(el.price)
    setStatus(el.status)
  }




  async function editData() {
    try {
      await axios.put(`${api}/${editId}`, {avatar,name,age,status,price})
      setModalEdit(false)
      getData()
    } catch (error) {
      console.error(error);
    }
  }

  async function addData() {
    try {
      await axios.post(api, {avatar,name,age,status,price})
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



  async function searchUser(value:string) {
    try {
      const {data} = await axios.get(api,{params:{name:value}})
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }

  async function searchStatus(value: string) {
  try {
    if (value === "All") {
      getData()
      return
    }
    const { data } = await axios.get(api, { params: { status: value === "Active" },})
    setData(data)
  } catch (error) {
    console.error(error)
    setData([])
  }
}



   useEffect(()=>{
    getData()
   },[])



   



  return (
  <div>
    <div className="flex items-center max-w-[1200px] m-auto p-10">
    <Button onClick={openAdd}>Add User</Button>
    <Input value={search} onChange={(e)=> {setSearch(e.target.value), searchUser(e.target.value)}} placeholder="Search"/>
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
    <div  className="flex flex-wrap max-w-[1200px] m-auto justify-between">
      {
        data.map((el)=>{
          return <div key={el.id}>
            <div>
              <img className="w-[200px]" src={el.avatar} alt="" />
              <h1>{el.name}</h1>
              <h3 className="text-green-600 font-bold">{el.price}</h3>
              <p>{el.status? "Active":"Inactive"}</p>
              <p>{el.age}</p>
              <div>
               <Button onClick={()=> deleteData(el.id)} variant="destructive">Delete</Button>
                <Button className="bg-blue-600 text-white" onClick={()=> openEdit(el)}  variant="outline">Edit</Button>
              </div>
            </div>
          </div>
        })
      }

      {
        modalAdd && (
          <Dialog open={modalAdd} onOpenChange={setModalAdd}>
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
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} onChange={(e)=> setAvatar(e.target.value)} placeholder="URl Link" id="avatar" required/>
            </Field>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Name" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="$$" id="price" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} onChange={(e)=> setAge(e.target.value)} placeholder="(number) age years old" id="avatar" required/>
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
              <Label htmlFor="username-1">Avatar</Label>
              <Input value={avatar} onChange={(e)=> setAvatar(e.target.value)}  id="avatar" />
            </Field>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input value={name} onChange={(e)=> setName(e.target.value)} id="name" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input value={price} onChange={(e)=> setPrice(e.target.value)} id="price" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Age</Label>
              <Input value={age} onChange={(e)=> setAge(e.target.value)}  id="avatar" />
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
