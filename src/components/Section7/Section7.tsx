import col from "../../images/Right.png"


const Section7 = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] m-auto mt-40">
        <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold">All the cool features</h1>
            <p>Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio <br /> ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit <br /> pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, <br /> ullamcorper non viverra a, neque orci.</p>
            <p className="text-[#2563EB] font-black">View all the features</p>
        </div>
        <img className="w-[600px]" src={col} alt="" />
    </div>
  )
}

export default Section7