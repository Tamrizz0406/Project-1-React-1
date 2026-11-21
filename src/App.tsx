import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"
import Layout from "./pages/Layout"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contacts = lazy(() => import("./pages/Contacts.tsx"))
const Faq = lazy(() => import("./pages/Faq.tsx"))
const Info = lazy(() => import("./pages/Info.tsx"))

const App = () => {
  return (
    <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="faq" element={<Faq />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App