import ava from "../../images/Icon.png"
import ava2 from "../../images/Icon copy.png"
import ava3 from "../../images/diamond.png"


const Section5 = () => {
  return (
    <div className="bg-[#0F172A]">
      <div className="flex justify-between max-w-[1000px] m-auto py-20">
        <div className="flex flex-col gap-4 items-center">
            <img src={ava} alt="" />
            <h1 className="text-6xl font-bold text-[#FACC15]">195</h1>
            <p className="text-[#FACC15]">user countries</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
            <img src={ava3} alt="" />
            <h1 className="text-6xl font-bold text-[#FACC15]">1M</h1>
            <p className="text-[#FACC15]">user countries</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
            <img src={ava2} alt="" />
            <h1 className="text-6xl font-bold text-[#FACC15]">17M</h1>
            <p className="text-[#FACC15]">user countries</p>
        </div>
      </div>
    </div>
  )
}

export default Section5
