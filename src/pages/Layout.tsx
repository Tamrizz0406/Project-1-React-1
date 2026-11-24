import { Link, Outlet } from "react-router"
import logo from "../images/Logo(3).png"



const Layout = () => {
  return (
    <div className="bg-black min-h-screen">
      <nav className="flex justify-around items-center gap-10 py-6 border-b border-gray-800 text-white">
        <img src={logo} alt="" />
        <Link to="/">Formik</Link>
        <Link to="/rhf">React Hook Form</Link>
         <button className="text-white bg-[#0A84FF] px-6 py-2 rounded-[8px] cursor-pointer">Contact Us</button>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout