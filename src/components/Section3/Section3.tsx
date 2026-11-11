import ava from "../../images/Group 51.png"


const Section3 = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] m-auto mt-30">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl font-bold">An all-in-one app <br /> that makes it easier</h1>
        <p>✔️ Est et in pharetra magna adipiscing ornare aliquam.</p>
        <p>✔️ Tellus arcu sed consequat ac velit ut eu blandit.</p>
        <p>✔️ Ullamcorper ornare in et egestas dolor orci.</p>
        <p className="text-[#2563EB] font-bold cursor-pointer">Find more about the app </p>
      </div>
      <div>
        <img src={ava} alt="" />
      </div>
    </div>
  )
}

export default Section3
