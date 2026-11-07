import "./Section.css"

import ava from "../../assets/row.png"



function Section3() {
  return (
    <div className="sec3">
      <div >
        <h1>What Clients Say</h1>
        <p>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div>
        <img src={ava} alt="" />
      </div>
    </div>
  )
}

export default Section3
