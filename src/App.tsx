import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router"
import Layout from "./pages/Layout"

const Home = lazy(() => import("./pages/Home"))
const RhfPage = lazy(() => import("./pages/RhfPage"))

const App = () => {
  return (
    <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="rhf" element={<RhfPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App