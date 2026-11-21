import axios from "axios"
import { useEffect, useState } from "react"
import foot from "../images/Group 1183.png"



import rec from "../images/Rectangle.png"
import { Button } from "@/components/ui/button"


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


const Info = () => {
    const api = "https://69b55733be587338e715a58f.mockapi.io/Figma"
    const [data, setData] = useState([])
    const [modalAdd, setModalAdd] = useState(false)
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const [modalEdit, setModalEdit] = useState(false)
    const [editId, setEditId] = useState("")


    const [search, setSearch] = useState("")


async function searchUser(value:string) {
    try {
        const {data} = await axios.get(api, {params:{name:value}})
        setData(data)
    } catch (error) {
        console.error(error);
    }
}



    const openEdit = (e:any)=>{
        setModalEdit(true)
        setImage(e.image)
        setDate(e.date)
        setTitle(e.title)
        setDesc(e.desc)
        setEditId(e.id)
    }

 async function editData() {
        try {
            await axios.put(`${api}/${editId}`, {image,date,title,desc})
            getData()
            setModalEdit(false)
        } catch (error) {
            console.error(error);
        }
    }

    


    const openAdd = ()=>{
        setModalAdd(true)
        setImage("")
        setDate("")
        setTitle("")
        setDesc("")
    }


    async function addData() {
        try {
            await axios.post(api, {image,date,title,desc})
            getData()
            setModalAdd(false)
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
            const {data}= await axios.get(api)
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
        <div className="max-w-[1200px] m-auto py-10">
            <h1 className="text-4xl mb-10">Интересно пишем про</h1>
            <div className="flex items-center justify-between">
                <img src={rec} alt="" />
                <div className="flex flex-col gap-5">
                <p>28.05.2020</p>
                <h1 className="text-4xl">Burn Calories <br /> Quicker in 30 Min.</h1>
                <div className="flex">
                <span className="bg-[#E5E5E5] px-3 py-1 rounded-2xl">про продукт</span><span className="bg-[#E5E5E5] px-3 py-1 rounded-2xl">теги</span><span className="bg-[#E5E5E5] px-3 py-1 rounded-2xl">много тегов</span>
                </div>
                <p>Идейные соображения высшего порядка, а также <br /> укрепление и развитие структуры играет важную <br /> роль в формировании существенных финансовых и <br /> административных условий. <br />
                    Не следует, однако забывать, что дальнейшее <br /> развитие различных форм деятельности <br /> способствует подготовки и реализации форм <br /> развития.</p>
                <h3 className="text-xl font-bold">Читать</h3>
                </div>
            </div>
        </div>
            <div className="flex max-w-[1200px] m-auto">
                <Button onClick={openAdd} className="bg-green-600 text-white cursor-pointer" variant="outline">Add New Product</Button>
                <Input placeholder="Search..." value={search} onChange={(e)=> {searchUser(e.target.value), setSearch(e.target.value)}}/>
            </div>
        <div className="flex flex-wrap max-w-[1200px] m-auto justify-between gap-8 mt-10">
      {
        data.map((el)=>{
            return <div key={el.id}>
                <div className="w-[350px] flex flex-col gap-2">
                    <img src={el.image} alt="" />
                    <p>{el.date}</p>
                    <h3 className="text-[22px] font-bold">{el.title}</h3>
                    <div>
                    <span className="bg-[#E5E5E5] px-3 py-1 rounded-2xl">{el.tag1}</span><span className="bg-[#E5E5E5] px-3 py-1 rounded-2xl">{el.tag2}</span>
                    </div>
                    <p className="text-[#061224E5]">{el.description}</p>
                    <Button variant="destructive" onClick={()=> deleteData(el.id)}>Delete</Button>
                    <Button onClick={()=> openEdit(el)}>Edit</Button>
                </div>
            </div>
        })
      }


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
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Avatar</Label>
              <Input id="name-1" value={image} onChange={(e)=> setImage(e.target.value)} placeholder="URL Link" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Date</Label>
              <Input id="username-1" value={date} onChange={(e)=> setDate(e.target.value)} placeholder="dd/mm/yyyy" required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Title</Label>
              <Input id="username-1" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Name..." required/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Input id="username-1" value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder="Description..." required/>
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
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Avatar</Label>
              <Input id="name-1" value={image} onChange={(e)=> setImage(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Date</Label>
              <Input id="username-1" value={date} onChange={(e)=> setDate(e.target.value)}/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Title</Label>
              <Input id="username-1" value={title} onChange={(e)=> setTitle(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Input id="username-1" value={desc} onChange={(e)=> setDesc(e.target.value)} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
        )
      }


        </div>
         <img className="max-w-[100%] m-auto pt-10" src={foot} alt="" />
    </div>
  )
}

export default Info
