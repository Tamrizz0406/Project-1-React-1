import "./Section.css"
import ava from "../../assets/Img(1) copy 2.png"

function Section4() {
  return (
    <section>
        <div>
            <h1 className="txt">Depoimentos de quem já <br /> passou por aqui</h1>
        </div>
        <div className="boxes">
        <div className="box">
            <p>Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.</p>
            <div className="pers">
                <img src={ava} alt="" />
                <p>Luna Falcão</p>
            </div>
        </div>
        <div className="box">
            <p>Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.</p>
            <div className="pers">
                <img src={ava} alt="" />
                <p>Luna Falcão</p>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Section4
