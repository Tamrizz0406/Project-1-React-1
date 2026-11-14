import { Button } from "@/components/ui/button";
import { useState } from "react"


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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const Card = () => {
    const [data, setData] = useState([{
    id: 1,
    name: "Hellen Jummy",
    email: "hellen@mail.com",
    age: 28,
    city: "Dushanbe",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Aziz Karimov",
    email: "aziz@mail.com",
    age: 24,
    city: "Khujand",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Madina Rahimova",
    email: "madina@mail.com",
    age: 31,
    city: "Dushanbe",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Rustam Nazarov",
    email: "rustam@mail.com",
    age: 35,
    city: "Bokhtar",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Sitora Aliyeva",
    email: "sitora@mail.com",
    age: 22,
    city: "Khujand",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=5",
  }])



  const deleteData = (id:number)=>{
        setData(data.filter((el)=> el.id !== id))
  }




  const [modalEdit, setModalEdit] = useState(false)
const [editId, setEditId] = useState(0)

  const [modalAdd, setModalAdd] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")
  const [status, setStatus] = useState("Active")
  const [avatar, setAvatar] = useState("")



  const addData = ()=>{
    setData([
        ...data,
        {id: Date.now(), name,email,age:Number(age),city,status,avatar}
    ])
    setModalAdd(false)
  }


  const openAdd=()=>{
    setName("")
    setEmail("")
    setAge("")
    setCity("")
    setStatus("Active")
    setAvatar("")
    setModalAdd(true)
  }



  const openEdit = (el: any) => {
  setEditId(el.id)
  setName(el.name)
  setEmail(el.email)
  setAge(String(el.age))
  setCity(el.city)
  setStatus(el.status)
  setAvatar(el.avatar)
  setModalEdit(true)
}

const editData = () => {
  setData(
    data.map((el) =>
      el.id === editId
        ? { ...el, name, email, age: Number(age), city, status, avatar }
        : el
    )
  )
  setModalEdit(false)
}



  return (
    <div>
        <Button onClick={openAdd} variant={"secondary"} className="bg-blue-700 text-white">Add New User</Button>
            <table className="border border-2 w-[70%] m-auto">
                <thead>
                  <tr>
                     <th className="p-3 text-center">Name</th>
                     <th className="p-3 text-center">Age</th>
                     <th className="p-3 text-center">City</th>
                     <th className="p-3 text-center">Status</th>
                     <th className="p-3 text-center">Actions</th>
                 </tr>
             </thead>

             <tbody>
                  {data.map((el) => {
                   return (
                     <tr key={el.id}>
                     <td className="p-3">
                         <div className="flex items-center gap-3">
                            <img className="w-[70px] rounded-full" src={el.avatar} alt="" />
                         <div className="flex flex-col gap-1">
                           <span className="font-bold">{el.name}</span>
                           <span>{el.email}</span>
                        </div>
                      </div>
                     </td>
                         <td className="p-3 text-center">{el.age}</td>
                         <td className="p-3 text-center">{el.city}</td>
                         <td className="p-3 text-center">{el.status}</td>
                        <td className="p-3 text-center">
                    <div className="flex justify-center gap-2">
                          <Button variant="outline" className="cursor-pointer" onClick={() => openEdit(el)}>
                           Edit
                         </Button>
                         <Button variant="destructive" className="cursor-pointer" onClick={() => deleteData(el.id)}>
                           Delete
                         </Button>
                    </div>
                        </td>
                     </tr>
                     );
                })}
        </tbody>
    </table>


                {
                    modalAdd && (
                        <Dialog open={modalAdd} onOpenChange={setModalAdd}>
  <DialogContent className="sm:max-w-sm">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addData();
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
          <Label htmlFor="age">Age</Label>
          <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
        </Field>
        <Field>
  <Label htmlFor="status">Status</Label>
  <Select value={status} onValueChange={(value) => setStatus(String(value))}>
    <SelectTrigger id="status" className="w-full">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="Active">Active</SelectItem>
      <SelectItem value="Inactive">Inactive</SelectItem>
    </SelectContent>
  </Select>
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
        <DialogDescription>
          Change the fields and click Save.
        </DialogDescription>
      </DialogHeader>

      <FieldGroup>
        <Field>
          <Label htmlFor="edit-avatar">Avatar URL</Label>
          <Input id="edit-avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="edit-name">Name</Label>
          <Input id="edit-name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="edit-email">Email</Label>
          <Input id="edit-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="edit-age">Age</Label>
          <Input id="edit-age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="edit-city">City</Label>
          <Input id="edit-city" value={city} onChange={(e) => setCity(e.target.value)} required />
        </Field>
        <Field>
          <Label htmlFor="edit-status">Status</Label>
          <Select value={status} onValueChange={(value) => setStatus(String(value))}>
            <SelectTrigger id="edit-status" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
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

export default Card
