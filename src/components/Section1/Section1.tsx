import ava from "../../images/Press.png"
import ava1 from "../../images/Group 50.png"


const Section1 = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] m-auto mt-15">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl font-bold">Teach students <br /> worldwide</h1>
        <p>Amet nunc diam orci duis ut sit diam arcu, nec. <br /> Eleifend proin massa tincidunt viverra lectus pulvinar. <br /> Nunc ipsum est pellentesque turpis ultricies.</p>
        <div className="flex items-center gap-8">
            <button className="bg-[#EA580C] px-6 py-2 rounded-[6px] text-white">Sign Up Now</button>
            <button className="text-[#2563EB]">View Demo</button>
        </div>
        <div>
            <img src={ava} alt="" />
        </div>
      </div>
      <div>
        <img className="w-[550px]" src={ava1} alt="" />
      </div>
    </div>
  )
}

export default Section1
