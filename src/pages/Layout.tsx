import { Link, Outlet } from "react-router"
import logo from "../images/Group 7.png"

const Layout = () => {
  return (
    <div>
      <nav className="flex justify-between items-center max-w-[1200px] m-auto py-8">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-10">
          <p>0 800 750 643</p>
          <Link to="/about">ПРО НАС</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contacts">КОНТАКТЫ</Link>
          <button className="border-2 border-[#1064E5] px-9 py-2 rounded-3xl">Вход</button>
          <button className="border-[#1064E5] bg-[#1064E5] text-white px-9 py-2 rounded-3xl">РЕГИСТРАЦИЯ</button>
          <p>Рус</p>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout