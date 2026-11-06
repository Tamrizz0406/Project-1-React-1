import "./Section.css"
import ava1 from "../../assets/Icon copy.png"
import ava2 from "../../assets/Icon copy 2.png"
import ava3 from "../../assets/Icon copy 3.png"

function Section3() {
  return (
    <section>
      <div className="text">
        <h1>Serviços</h1>
        <p>Com mais de 10 anos no mercado, o Beautysalon já <br /> conquistou clientes de inúmeros países com seus tratamentos <br /> exclusivos e totalmente naturais</p>
      </div>
      <div className="sec3">
        <div className="box1">
            <img src={ava1} alt="" />
            <h2>Terapia capilar</h2>
            <p>Terapia completa para couro <br /> cabeludo e fios, protegendo todos <br /> os tipos de cabelos, inclusive os <br />longos e finos.</p>
        </div>
        <div className="box1">
            <img src={ava2} alt="" />
            <h2>Cortes</h2>
            <p>A nossa equipe é repleta de <br /> profissionais renomados, famosos <br /> por lançarem tendências com <br /> cortes diferenciados e clássicos.</p>
        </div>
        <div className="box1">
            <img src={ava3} alt="" />
            <h2>Tratamentos</h2>
            <p>O beautysalon conta com diversos <br /> tratamentos naturais e totalmente <br /> veganos, para qualquer tipo <br /> de cabelo.</p>
        </div>
      </div>
    </section>
  )
}

export default Section3
