import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/Header/Header.tsx'
import Section1 from './components/Section1/Section.tsx'
import Section2 from './components/Section2/Section.tsx'
import Section3 from './components/Section3/Section.tsx'
import Section4 from './components/Section4/Section.tsx'
import Section6 from './components/Section6/Section.tsx'
import Section7 from './components/Section7/Section.tsx'
import Footer from './components/Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section6/>
    <Section7/>
    <Footer/>
  </StrictMode>,
)
