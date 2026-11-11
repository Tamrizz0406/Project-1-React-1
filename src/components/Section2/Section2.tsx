import screen from "../../images/Desktop.png"
import ava2 from "../../images/App-thumbnail.png"
import ava3 from "../../images/App-thumbnail copy.png"
import ava4 from "../../images/App-thumbnail copy 2.png"
import ava5 from "../../images/App-thumbnail copy 3.png"
import ava6 from "../../images/App-thumbnail copy 4.png"
import ava7 from "../../images/App-thumbnail copy 5.png"
import ava8 from "../../images/App-thumbnail copy 6.png"
import ava9 from "../../images/App-thumbnail copy 7.png"
import ava10 from "../../images/App-thumbnail copy 8.png"


const Section2 = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <h1 className="text-center text-4xl font-bold mt-30">All the tools that you need</h1>
      <p className="text-center mt-5">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br />
        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        <div>
            <img className="max-w-[1000px] m-auto mt-10" src={screen} alt="" />
        </div>
        <div className="flex justify-between items-center mt-10">
            <img src={ava2} alt="" />
            <img src={ava3} alt="" />
            <img src={ava4} alt="" />
            <img src={ava5} alt="" />
            <img src={ava6} alt="" />
            <img src={ava7} alt="" />
            <img src={ava8} alt="" />
            <img src={ava9} alt="" />
            <img src={ava10} alt="" />
        </div>
    </div>
  )
}

export default Section2
