import logo from "../../images/Logo-colored 2.png"


const Footer = () => {
  return (
    <div className="bg-[#0F172A]">
      <div className="flex items-start justify-between max-w-[1200px] m-auto py-15">
        <img src={logo} alt="" />
        <div className="text-white flex flex-col gap-4">
            <h3 className="text-[18px] font-bold">Product</h3>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Browse</p>
            <p>Accessibility</p>
        </div>
        <div className="text-white flex flex-col gap-4">
            <h3 className="text-[18px] font-bold">Solutions</h3>
            <p>Brainstorming</p>
            <p>Ideation</p>
            <p>Wireframing</p>
            <p>Research</p>
        </div>
        <div className="text-white flex flex-col gap-4">
            <h3 className="text-[18px] font-bold">Resources</h3>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Tutorials</p>
            <p>FAQs</p>
        </div>
        <div className="text-white flex flex-col gap-4">
            <h3 className="text-[18px] font-bold">Support</h3>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Documentation</p>
            <p>Integrations</p>
        </div>
        <div className="text-white flex flex-col gap-4">
            <h3 className="text-[18px] font-bold">Company</h3>
            <p>About</p>
            <p>Press</p>
            <p>Events</p>
            <p>Request Demo</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
