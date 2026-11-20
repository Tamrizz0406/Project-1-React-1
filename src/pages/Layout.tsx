import { Link, Outlet } from "react-router"


const Layout = () => {
  return (
    <div>
      <Link to={"/"}></Link>
      <Link to={"/about"}></Link>
      <Outlet/>
    </div>
  )
}

export default Layout

