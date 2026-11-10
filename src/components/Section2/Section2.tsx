import { useState } from "react";



const Section2 = () => {
    const [data, setData] = useState([
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7FBP8a4dyvXr8G3PdrtB0k2DtSfOnaKCeTQ0d8Wu_YpVar5ye3htN58&s=10",
      titleBold: "Front-End",
      titleRegular: "Developer",
      technologies: "Sass, Bootstrap,Tailwind,"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7FBP8a4dyvXr8G3PdrtB0k2DtSfOnaKCeTQ0d8Wu_YpVar5ye3htN58&s=10",
      titleBold: "Back-End",
      titleRegular: "Developer",
      technologies:  "Sass, Bootstrap,Tailwind,"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7FBP8a4dyvXr8G3PdrtB0k2DtSfOnaKCeTQ0d8Wu_YpVar5ye3htN58&s=10",
      titleBold: "UI/UX",
      titleRegular: "Designer",
      technologies:  "Sass, Bootstrap,Tailwind,"
    },
  ]);
  
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(0)
  const [image, setImage] = useState("");
  const [titleBold, setTitleBold] = useState("");
  const [titleRegular, setTitleRegular] = useState("");
  const [technologies, setTechnologies] = useState("");

  const deleteData = (id: number) => {
    setData(data.filter((el) => el.id !== id));
  };

    const openAdd = () => {
    setEditId(0);
    setImage("");
    setTitleBold("");
    setTitleRegular("");
    setTechnologies("");
    setIsOpen(true);
  };



  const openEdit = (el: any) => {
    setEditId(el.id);
    setImage(el.image);
    setTitleBold(el.titleBold);
    setTitleRegular(el.titleRegular);
    setTechnologies(el.technologies);
    setIsOpen(true);
  };




  return (
    <div>
      <h1 className="text-3xl mt-30 text-center">Additional passions</h1>

      <div className="max-w-[1200px] m-auto flex justify-end mt-6">
        <button
          onClick={() => setIsOpen(true)} className="rounded bg-blue-600 px-4 py-2 text-white">
          Add new user
        </button>
      </div>

      <div className="flex max-w-[1200px] m-auto justify-between">
        {data.map((el) => (
          <div key={el.id}>
            <img className="w-[200px]" src={el.image} alt="" />
            <span className="text-2xl font-bold">{el.titleBold}</span> <span className="text-xl ml-3">{el.titleRegular}</span>
            <h3 className="text-[#000000]">{`(${(el.technologies)})`}</h3>
            <button className="bg-red-600 py-2 px-5 text-white rounded-`xl" onClick={() => deleteData(el.id)}>Delete</button>
            <button className="bg-gray-400 py-2 px-5 text-white rounded-`xl" onClick={() => openEdit(el)}>Edit</button>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <form onSubmit={(e) => {e.preventDefault();
          if(editId === 0){
            setData([...data,
              { id: Date.now(), image, titleBold, titleRegular, technologies },
            ]);
          }else{
            setData(data.map((el)=>
              el.id === editId? {...el, image, titleBold, titleRegular, technologies } :el
            ))
          }
              
              setIsOpen(false);
            }}
            className="w-[400px] rounded-xl bg-white p-6 flex flex-col gap-3">
            <h2 className="text-xl font-bold">
              {editId === 0 ? "Add New USer": "Edit User"}
            </h2>

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              required
              className="border rounded px-3 py-2"/>
            <input
              value={titleBold}
              onChange={(e) => setTitleBold(e.target.value)}
              placeholder="Title bold (Front-End)"
              required
              className="border rounded px-3 py-2"/>
            <input
              value={titleRegular}
              onChange={(e) => setTitleRegular(e.target.value)}
              placeholder="Title regular (Developer)"
              required
              className="border rounded px-3 py-2"/>
            <input
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="Technologies (Sass, Bootstrap)"
              required
              className="border rounded px-3 py-2"/>

            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}className="rounded border px-4 py-2">
                Cancel
              </button>

              <button
                type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
                {
                  editId === 0 ? "Add":"Save"
                }
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Section2;