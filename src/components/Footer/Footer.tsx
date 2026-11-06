import "./Footer.css"
import avv1 from "../../assets/phone 1.png"
import avv2 from "../../assets/map-pin 1.png"
import avv3 from "../../assets/mail 1.png"
import avv4 from "../../assets/Redes sociais.png"
import avv5 from "../../assets/Logo(3) copy.png"

function Footer() {
  return (
    <section>
      <div className="foot">
        <div>
            <h1>Entre em contato com a gente!</h1>
            <p>Entre em contato com a Beautysalon, <br /> queremos tirar suas dúvidas, ouvir suas <br /> críticas e sugestões.</p>
            <button className="btn">Entrar em contato</button>
        </div>
        <div>
            <div className="divv">
                <img src={avv1} alt="" />
                <p>Entrar em contato</p>
            </div>
            <div className="divv">
                <img src={avv2} alt="" />
                <p>R. Amauri Souza, 346</p>
            </div>
            <div className="divv">
                <img src={avv3} alt="" />
                <p>contato@beautysalon.com</p>
            </div>
        </div>
      </div>
      <div className="footT">
        <div className="left">
            <img src={avv5} alt="" />
            <p>©2021 Beautysalon.</p>
            <p>Todos os direitos reservados.</p>
        </div>
        <img src={avv4} alt="" />
      </div>
    </section>
  )
}
export default Footer
