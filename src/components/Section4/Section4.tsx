import ava from "../../images/github.png"
import ava2 from "../../images/Instagram.png"
import ava3 from "../../images/call.png"
import ava4 from "../../images/fast message.png"


const Section4 = () => {
  return (
    <div>
      <h1 className="text-purple-500 text-4xl text-center mt-30">Contact <b className="text-purple-900">Me</b></h1>
      <div className="flex justify-between max-w-[1200px] m-auto mt-10">
        <div className="flex flex-col items-center gap-5">
            <img className="bg-[#608AF5] rounded-2xl p-4" src={ava} alt="" />
            <h1 className="text-[#3F3D56] text-2xl">Github</h1>
        </div>
        <div className="flex flex-col items-center gap-5 ">
            <img className="bg-[#608AF5] rounded-2xl p-4" src={ava2} alt="" />
            <h1 className="text-[#3F3D56] text-2xl">Instagram</h1>
        </div>
        <div className="flex flex-col items-center gap-5 ">
            <img className="bg-[#608AF5] rounded-2xl p-4" src={ava4} alt="" />
            <h1 className="text-[#3F3D56] text-2xl">Email</h1>
        </div>
        <div className="flex flex-col items-center gap-5 ">
            <img className="bg-[#608AF5] rounded-2xl p-4" src={ava3} alt="" />
            <h1 className="text-[#3F3D56] text-2xl">Help</h1>
        </div>
      </div>
    </div>
  )
}

export default Section4
