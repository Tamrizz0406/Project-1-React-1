import { useState } from "react"

const Table = () => {
    const [data,setData] = useState([{id:1, avatar:"https://img.magnific.com/premium-vector/woman-avatar-profile-icon-vector-illustration_874723-207.jpg?semt=ais_hybrid&w=740&q=80",
        name: "Lius Figo",
        status: true,
        job:"FrontEnd_developer",
        city:"Dushanbe"
    },{id:2, avatar:"https://img.magnific.com/premium-vector/woman-avatar-profile-icon-vector-illustration_874723-207.jpg?semt=ais_hybrid&w=740&q=80",
        name: "Lius Figo",
        status: true,
        job:"FrontEnd_developer",
        city:"Dushanbe"
    },{id:3, avatar:"https://img.magnific.com/premium-vector/woman-avatar-profile-icon-vector-illustration_874723-207.jpg?semt=ais_hybrid&w=740&q=80",
        name: "Lius Figo",
        status: true,
        job:"FrontEnd_developer",
        city:"Dushanbe"
    },{id:4, avatar:"https://img.magnific.com/premium-vector/woman-avatar-profile-icon-vector-illustration_874723-207.jpg?semt=ais_hybrid&w=740&q=80",
        name: "Lius Figo",
        status: true,
        job:"FrontEnd_developer",
        city:"Dushanbe"
    },{id:5, avatar:"https://img.magnific.com/premium-vector/woman-avatar-profile-icon-vector-illustration_874723-207.jpg?semt=ais_hybrid&w=740&q=80",
        name: "Lius Figo",
        status: true,
        job:"FrontEnd_developer",
        city:"Dushanbe"
    },{id:6, avatar:"https://img.magnific.com/premium-vector/woman-avatar-profile-icon-vector-illustration_874723-207.jpg?semt=ais_hybrid&w=740&q=80",
        name: "Lius Figo",
        status: true,
        job:"FrontEnd_developer",
        city:"Dushanbe"
    },])


    const [search, setSearch] = useState("")


    const deleteData=(id:number)=>{
        setData(data.filter((el)=> el.id !== id))
    }




    const [modalAdd, setModalAdd] = useState(false)
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [city, setCity] = useState("")







    const openAdd =()=>{
        setAvatar("")
        setName("")
        setJob("")
        setCity("")
        setModalAdd(true)
    }


  const addUser =()=>{
    setData([...data, name,avatar,job,city])
  }





  return (
    <div>
        <button onClick={openAdd}>Add</button>
        <div>
            
      {
        data.map((el)=>{
            return <div key={el.id} className="flex justify-between items-center w-[500px]">
                <div className="flex items-center">
                <img className="w-[70px]" src={el.avatar} alt="" />
                <div>
                    <h2>{el.name}</h2>
                    <h4>{el.city}</h4>
                </div>
                </div>

                <p>{el.job}</p>
                <p>{el.status? "Active":"Inactive"}</p>
                <button onClick={()=> deleteData(el.id)}>Delete</button>
            </div>
        })
      }
            </div>


      {
        modalAdd && (
            <div>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    setModalAdd(true);
                    addUser()
                }
                    }   className="addForm">
                    <h1>Add User</h1>
                    <input value={avatar} onChange={(e)=>setAvatar(e.target.value)} required placeholder="URL link"/>
                    <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Name"/>
                    <input value={city} onChange={(e)=>setCity(e.target.value)} required placeholder="City"/>
                    <input value={job} onChange={(e)=>setJob(e.target.value)} required placeholder="Job"/>
                    <button type="button">Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
      }
    </div>


      
  )
}

export default Table
