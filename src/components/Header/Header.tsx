import logo from "../../images/Logo-colored.png"


const Header = () => {
  return (
    <div className="flex max-w-[1220px] m-auto justify-between items-center py-10">
        <div className="flex items-center gap-14">
         <img src={logo} alt="" />
         <p>Products</p>
         <p>Solutions</p>
         <p>Pricing</p>
         <p>Resources</p>
        </div>
      <div className="flex gap-4">
        <button>Log in</button>
        <button className="border-2 rounded-[8px] px-5 py-2">Sign Up Now</button>
      </div>
    </div>
  )
}

export default Header
