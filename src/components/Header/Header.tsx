import logo from "../../images/Rauliqbal.png"



const Header = () => {
  return (
    <div className="flex justify-between max-w-[1200px] m-auto py-10">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-8">
        <p>About</p>
        <p>Passions</p>
        <p>Portfolio</p>
        <button className="bg-[#608AF5] px-8 py-2 rounded-xl text-white">Contact Me</button>
      </div>
    </div>
  )
}

export default Header
