import gr from "../images/Group 1296.png"
import tr from "../images/Group 1392.png"
import bg from "../images/box.png"
import foot from "../images/Group 1183.png"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"

const Home = () => {
  const api = "https://69b55733be587338e715a58f.mockapi.io/Card1"
  const [data, setData] = useState([])

  const [modalAdd, setModalAdd] = useState(false)
  const [name, setName] = useState("")
  const [documents, setDocs] = useState("")
  const [period, setPer] = useState("")
  const [price, setPrice] = useState("")


  const [modalEdit, setModalEdit] = useState(false)
  const [editId, setEditId] = useState("")



  const openEdit = (el:any)=>{
    setModalEdit(true)
    setEditId(el.id)
    setName(el.name)
    setDocs(el.documents)
    setPer(el.period)
    setPrice(el.price)
  }



  async function editData() {
    try {
      await axios.put(`${api}/${editId}`, {name,documents,period,price})
      getData()
      setModalEdit(false)
    } catch (error) {
      console.error(error);
    }
  }


  const openAdd = ()=>{
    setModalAdd(true)
    setName("")
    setDocs("")
    setPer("")
    setPrice("")
  }


  async function addData() {
    try {
      await axios.post(api, {name,documents,period,price})
      getData()
      setModalAdd(false)
    } catch (error) {
      console.error(error);
    }
  }


  async function deleteData(id: number) {
    try {
      await axios.delete(`${api}/${id}`)
      getData()
    } catch (error) {
      console.error(error)
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
      <div className="bg-cover bg-center h-[95vh]" style={{ backgroundImage: `url(${bg})` }}>
        <section className="flex flex-col items-start gap-7 ml-[116px] pt-[60px]">
          <h1 className="text-5xl">Цифровой документооборот <br /> в три этапа:</h1>
          <h3 className="text-2xl">Быстрая регистрация</h3>
          <p>Мы создали, возможно, самую простую регистрацию. <br /> Регистрируйся, получай полный доступ к сервису и <br /> 1000 подписей документов в подарок!</p>
          <button className="border-[#1064E5] bg-[#1064E5] text-white px-9 py-2 rounded-3xl">Попробовать Бесплатно</button>
        </section>
      </div>

      <div className="flex justify-center py-10">
        <img src={gr} alt="" />
      </div>

      <div className="bg-[#D8F1F0]">
        <div className="flex justify-between items-center max-w-[1200px] m-auto py-10">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl">Комфорт в работе</h1>
            <p>- Создавай документы по твоим личным привычным <br /> шаблонам. Это индивидуально!</p>
            <p>- Настраивай порядок подписание документа, если вас <br /> несколько человек. Это ответственно!</p>
            <p>- Загружай XML файл с собственным шаблоном готового <br /> документа. Это удобно!</p>
            <p>- Работай в супер простом и понятном интерфейсе без <br /> сложностей. Это приятно!</p>
            <button className="border-2 border-[#1064E5] px-9 py-2 rounded-3xl">Узнать больше</button>
          </div>
          <img src={tr} alt="" />
        </div>

        <div className="flex justify-between items-center max-w-[1200px] m-auto py-10">
          <img src={tr} alt="" />
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl">Наш продукт это:</h1>
            <p>- Web версия без установки программного обеспечения</p>
            <p>- Возможность бесплатно и безлимитно обрабатывать <br /> входящие документы</p>
            <p>- Простота интеграции с 1С и другими сервисами</p>
            <p>- Поддержка входа через Mobile ID</p>
            <button className="border-[#1064E5] bg-[#1064E5] text-white px-9 py-2 rounded-3xl">Зарегистрироваться</button>
          </div>
        </div>
      </div>

      <h1 className="text-center text-4xl py-10">Пакеты цифровых подписей</h1>

        <div className="flex max-w-[1200px] m-auto pb-10">
          <Button onClick={openAdd}>Add new Product</Button>
          <Input placeholder="Search..."/>
        </div>
      <section className="flex flex-wrap max-w-[1200px] m-auto justify-between gap-5">
        {data.map((el) => {
          return (
            <div key={el.id}>
              <div className="bg-[#DEEEFC] w-[350px] flex flex-col items-start gap-7 p-5">
                <h1 className="text-4xl">{el.name}</h1>
                <p className="text-[18px]">{el.documents}</p>
                <span className="text-5xl font-bold">
                  {el.price} <span className="text-xl font-medium">{el.period}</span>
                </span>
                <Button variant="ghost" className="border-[#1064E5] cursor-pointer m-auto bg-[#1064E5] text-white px-9 py-2 rounded-3xl">
                  {el.buttonText}
                </Button>
                <div>
                <Button onClick={() => deleteData(el.id)} variant="destructive">Delete</Button>
                <Button onClick={()=> openEdit(el)}>Edit</Button>
                <Link to="/info">
                  <Button variant="secondary">Info</Button>
                </Link>
                </div>
              </div>
            </div>


            

          )
        })}


        {
          modalAdd && (
            <Dialog open={modalAdd} onOpenChange={setModalAdd}>
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={(e)=>{
        e.preventDefault();
        addData()
      }}>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" value={name} onChange={(e)=> setName(e.target.value)} required placeholder="Name"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Documnets quantity</Label>
              <Input id="username-1" value={documents} onChange={(e)=> setDocs(e.target.value)} required placeholder="Quantity"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input id="username-1" value={price} onChange={(e)=> setPrice(e.target.value)} required placeholder="$(...)"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Period</Label>
              <Input id="username-1" value={period} onChange={(e)=> setPer(e.target.value)} required placeholder="from (...) to (...)"/>
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
        e.preventDefault();
        editData()
      }}>
          <DialogHeader>
            <DialogTitle>Edit product</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" value={name} onChange={(e)=> setName(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Documnets quantity</Label>
              <Input id="username-1" value={documents} onChange={(e)=> setDocs(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input id="username-1" value={price} onChange={(e)=> setPrice(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Period</Label>
              <Input id="username-1" value={period} onChange={(e)=> setPer(e.target.value)}/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
          )
        }


      </section>

      <div className="pt-10">
        <img className="max-w-[100%] m-auto" src={foot} alt="" />
      </div>
    </div>
  )
}

export default Home