import "./Section.css"
import ava from "../../assets/col-md-6.png"


function Section1() {
  return (
    <section className="sec1">
        <div className="sec1left">
            <h1>Financial <br /> Assistance With <br /> True Purpose</h1>
            <p className="pp">We know how large objects will act, <br /> but things on a small scale.</p>
            <div className="btns">
                <button className="btn1">Get Quote Now</button>
                <button className="btn2">Learn More</button>
            </div>
        </div>
        <img src={ava} alt="" />
    </section>
  )
}

export default Section1
