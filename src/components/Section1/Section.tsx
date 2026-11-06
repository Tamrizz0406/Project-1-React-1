
import "./Section.css"
import ava from "../../assets/Img(1).png"

function Section1(){
    return (
        <section className="sec1">
            <img className="avatar" src={ava} alt="" />
            <div className="text1">
                <h1 className="tx1">Saúde natural para <br /> os seus cabelos</h1>
                <p>Um salão exclusivo em São Paulo, <br /> especializado em tratamentos naturais.</p>
                <button className="btn">Agendar um horário</button>
            </div>
        </section>
    )
}


export default Section1