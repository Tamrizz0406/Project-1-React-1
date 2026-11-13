import { useState } from "react";
import Button from "@mui/material/Button"


const Card = () => {
    const [data, setData] = useState([
  {
    id: 1,
    name: "Hellen Jummy",
    status: "Active",
    description: "Financial Counselor with 8 years of experience in personal budgeting.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Aziz Karimov",
    status: "Inactive",
    description: "Front-End developer, works with React and Tailwind.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Madina Rahimova",
    status: "Active",
    description: "UI/UX designer, creates interfaces in Figma.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Rustam Nazarov",
    status: "Active",
    description: "Back-End developer, builds APIs with NodeJS.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },  
]);



const [modalAdd, setModalAdd] = useState(false)
const [modalEdit, setModalEdit] = useState(false)
const [editId, setEditId] = useState(0)

const [avatar, setAvatar] = useState("")
const [name, setName] = useState("")
const [desc, setDesc] = useState("")
const [status, setStatus] = useState(false)

const [search, setSearch] = useState("")
const [searchStatus, setSearchStatus] = useState("All");



const addData = ()=>{
    setData([...data,
        {id:Date.now(),avatar,name,description:desc,status}
    ])
    setModalAdd(false)
}



const openAdd=(el:any)=>{
    setAvatar(el.avatar)
    setName(el.name)
    setDesc(el.desc)
    setStatus(el.status)
    setModalAdd(true)
}



const openEdit = (el: any) => {
    setEditId(el.id);
    setAvatar(el.avatar);
    setName(el.name);
    setDesc(el.description);
    setStatus(el.status);
    setModalEdit(true);
  };

  const editData = () => {
    setData(
      data.map((el) =>
        el.id === editId
          ? { ...el, avatar, name, description: desc, status }
          : el
      )
    );
    setModalEdit(false);
  };



const deleteData=(id:number)=>{
      setData(data.filter((el)=> el.id !== id))
}
   return (
    <div className="max-w-[1200px] m-auto p-6">
      {/* Панель: поиск, фильтр, кнопка */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search User"
          className="flex-1 min-w-[200px] rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
        <select
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <Button onClick={openAdd} variant="contained">
          Add New User
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()) &&
              (searchStatus === "All" || el.status === searchStatus)
          )
          .map((el) => {
            return (
              <div
                key={el.id}
                className="flex flex-col gap-4 rounded-2xl border-4 border-gray-300  p-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={el.avatar}
                    alt=""
                  />
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-lg font-bold">{el.name}</h3>
                    <span
                      className={`rounded-full px-3 py-0.5 text-sm text-white ${
                        el.status === "Active" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    >
                      {el.status}
                    </span>
                  </div>
                </div>

                <p className="flex-1 text-[#475569]">{el.description}</p>

                <div className="flex gap-3">
                  <Button
                    onClick={() => deleteData(el.id)}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => openEdit(el)}
                    variant="contained"
                    color="success"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            );
          })}
      </div>

      {modalAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addData();
            }}
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold text-[#1D2A68]">Add New User</h2>

            <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Image URL Link" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
            <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <div className="mt-2 flex justify-end gap-3">
              <Button onClick={() => setModalAdd(false)} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}

       {modalEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editData();
            }}
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Edit User</h2>

            <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Image URL Link" required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"  className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3">
              <option value="true">Active</option>
              <option value="active">Inactive</option>
            </select>

            <div className="flex justify-end gap-3">
              <Button onClick={() => setModalEdit(false)} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
            </div>
          </form>
        </div>
      )}

    </div>


  )
}

export default Card
