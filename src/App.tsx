import { createBrowserRouter, } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";



const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
      element: <Home/>
    },
      {
        path: "/about",
      element: <About/>
    },
    {
      path:"*",
      element:<div>NOT FOUND</div>
    }
    ]
  },
]);
return (
  <div>
    <RouterProvider router={router}/>
  </div>
)
}


export default App
