import { useState } from "react"
import arrows from "../../images/Arrows.png"


const Section6 = () => {
    const [data,setData] = useState([{id:1,desc:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        avatar:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        name:"Hellen Jummy",
        job:"Financial Counselor"
    },
{id:2,desc:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        avatar:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        name:"Hellen Jummy",
        job:"Financial Counselor"
    },
{id:3,desc:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        avatar:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        name:"Hellen Jummy",
        job:"Financial Counselor"
    }])


    const [modalAdd, setModalAdd] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [editId, setEditId] = useState(0)

    const [avatar, setAvatar] = useState("")
    const [desc, setDesc] = useState("")
    const [name, setName] = useState("")
    const [job, setJob] = useState("")



    const openAdd = ()=>{
        setAvatar("")
        setDesc("")
        setName("")
        setJob("")
        setModalAdd(true)
    }


    const addData =()=>{
        setData([...data,
            {id:Date.now(), avatar, desc, name, job}
        ])
        setModalAdd(false)
    }


    const openEdit =(el:any)=>{
        setEditId(el.id)
        setAvatar(el.avatar)
        setName(el.name)
        setDesc(el.desc)
        setJob(el.job)
        setModalEdit(true)
    }


    const editData =()=>{
        setData(
            data.map((el)=>
                el.id === editId ? {...el,avatar,desc,name,job}:el
            )
        )
        setModalEdit(false)
    }




    const deleteData=(id:number)=>{
        setData(data.filter((el)=> el.id !== id))
    }



  return (
    <div className="max-w-[1200px] m-auto mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold" >What everyone says</h1>
        <img src={arrows} alt="" />
      </div>
      <button className="text-white px-5 py-2 rounded-xl cursor-pointer bg-blue-600"onClick={openAdd}>Add</button>
      <div className="flex justify-between flex-wrap">
        {
            data.map((el)=>{
                return <div key={el.id} className="border-1 w-[360px] p-8 border-amber-50 shadow-lg shadow-[#0000001A] rounded-xl">
                    <p>{el.desc}</p>
                    <div className="flex items-center gap-3">
                        <img className="w-[80px]" src={el.avatar} alt="" />
                        <div>
                            <p>{el.name}</p>
                            <p className="text-[#475569]">{el.job}</p>
                        </div>
                    </div>
                    <div>
                        <button className="bg-red-500 text-white px-5 py-2 rounded-xl cursor-pointer" onClick={()=>{deleteData(el.id)}}>Delete</button>
                        <button className="bg-gray-500 text-white px-5 py-2 rounded-xl cursor-pointer" onClick={()=> openEdit(el)}>Edit</button>
                    </div>
                </div>
            })
        }
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

      <input
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="URL Link"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        required
        rows={3}
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
      <input
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Profession"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <div className="mt-2 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => setModalAdd(false)}
          className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Add
        </button>
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
      <h2 className="text-2xl font-bold text-[#1D2A68]">Edit User</h2>

      <input
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="URL Link"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        required
        rows={3}
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
      <input
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Profession"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <div className="mt-2 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => setModalEdit(false)}
          className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  </div>
)}

    </div>
  )
}

export default Section6
