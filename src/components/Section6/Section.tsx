import "./Section.css"
import price from "../../assets/price.png"
import price1 from "../../assets/price copy.png"


function Section6() {
  return (
    <div className="sec7">
        <div className="txt">
            <h1>Pricing</h1>
            <p>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

<div className="disp">

        <div className="sec6">
            <div className="dispp">
            <h2>FREE</h2>
            <p>
                Most calendars are designed <br />
for teams. Slate is designed <br />
for freelancers who want <br />
 a simple way <br />
                </p>
            </div>
            <div className="pr">
                <img src={price} alt="" />
                <button className="btn1">Try for free</button>
            </div>
        </div>
        <div className="sec6">
            <div>
            <h2>STANDARD</h2>
            <p>
                Most calendars are designed <br />
for teams. Slate is designed <br />
for freelancers who want <br />
 a simple way <br />
                </p>
            </div>
            <div className="pr">
                <img src={price1} alt="" />
                <button className="btn1">Try for free</button>
            </div>
        </div>
</div>

    </div>
  )
}

export default Section6
