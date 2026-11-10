import ava from "../../images/emojione_e-mail(1).png"
import ava1 from "../../images/SendPay 1.png"
import ava2 from "../../images/e-commerce 1 1.png"
import ava3 from "../../images/Edtech 1.png"


const Section3 = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-30 text-blue-500">My <b className="text-blue-900">Portfolio</b> </h1>
      <div className="flex justify-between max-w-[1200px] m-auto mt-10">
        <div className="flex flex-col gap-8 border-1 rounded-xl w-[360px] h-[265px] drop-shadow-[#00000040]">
            <div className="flex items-center gap-6">
                <img src={ava} alt="" />
                <h1 className="text-3xl text-[#6C63FF]">Sendpay</h1>
            </div>
            <div className="flex justify-end">
              <img src={ava1} alt="" />
            </div>
        </div>
        
        <div className="flex flex-col gap-8 border-1 rounded-xl w-[360px] h-[265px] drop-shadow-[#00000040]">
            <div>
                <h1 className="text-3xl text-[#6C63FF]">E- Commerce</h1>
            </div>
            <div className="flex justify-end">
            <img className="w-[310px]" src={ava2} alt="" />

            </div>
        </div>

        <div className="flex flex-col gap-8 border-1 rounded-xl w-[360px] h-[265px] drop-shadow-[#00000040]">
            <div>
                <h1 className="text-3xl">BeatsLearning</h1>
            </div>
            <div className="flex justify-end">
            <img className="w-[310px]" src={ava3} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
