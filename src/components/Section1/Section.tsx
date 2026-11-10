import ava from "../../images/heroImg 1.png" 


const Section = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] m-auto">
        <div className="flex flex-col gap-10">
      <h3 className="text-2xl">Hi !</h3>
      <h1 className="text-5xl font-bold">I’m Muhamad Raul. <br /> a Front-End Developer</h1>
      <p>Front-End devel oper based in Bekasi, Indonesian <br />
I’am coding with a clean and beautiful problem <br />
solving in mind.</p>
        </div>
        <img src={ava} alt="" />
    </div>
  )
}

export default Section
