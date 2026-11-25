import { Link, Outlet } from "react-router"



const Layout = () => {
  return (
    <div>
      <nav className="flex justify-around items-center gap-10 py-6 border-b border-gray-800 text-white">
        <Link className="text-black" to="/">Home</Link>
        <Link className="text-black"  to="/rhf">React Hook Form</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout