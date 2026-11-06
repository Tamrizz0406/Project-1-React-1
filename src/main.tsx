import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Section1 from './components/Section1/Section'
import Section2 from './components/Section2/Section'
import Section3 from './components/Section3/Section'
import Section4 from './components/Section4/Section'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
  </StrictMode>,
)
