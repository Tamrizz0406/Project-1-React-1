import "./Header.css"

import search from "../../assets/icn search.png"
import cart from "../../assets/icn shopping-cart.png"
import bar from "../../assets/icn menu.png"

function Header() {
  return (
    <nav className="navbar">
      <h2>BrandName</h2>
      <div className="nav">
        <img src={search} alt="" />
        <img src={cart} alt="" />
        <img src={bar} alt="" />
      </div>
      <div className="page">
        <p>Home</p>
        <p>Product</p>
        <p>Pricing</p>
        <p>Contact</p>
      </div>
      <div className="navright">
        <p>Login</p>
        <button className="btn">Become a member</button>
      </div>
    </nav>
  )
}

export default Header
