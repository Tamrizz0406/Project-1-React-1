import "./Footer.css"
import soc from "../../assets/social media.png"



function Footer() {
  return (
    <div className="foot">
      <div>
        <h2 className="h22">Get In Touch</h2>
        <p>the quick fox jumps over the lazy dog</p>
        <img src={soc} alt="" />
      </div>
      <div>
        <h2 className="h22">Company info</h2>
        <p>About Us</p>
        <p>Carrier</p>
        <p>We are hiring</p>
        <p>Blog</p>
      </div>
      <div>
        <h2 className="h22">Features</h2>
        <p>Business Marketing</p>
        <p>User Analytic</p>
        <p>Live Chat</p>
        <p>Unlimited Support</p>
      </div>
      <div>
        <h2 className="h22">Resources</h2>
        <p>IOS & Android</p>
        <p>Watch a Demo</p>
        <p>Customers</p>
        <p>API</p>
      </div>
    </div>
  )
}

export default Footer
