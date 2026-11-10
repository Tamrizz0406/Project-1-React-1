import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Section from "./components/Section1/Section"
import Section2 from "./components/Section2/Section2"
import Section3 from "./components/Section3/Section3"
import Section4 from "./components/Section4/Section4"

function App() {
  return (
    <div>
      <Header/>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default App
