import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AllCard from "./pages/AllCard";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",//correspond a la racine du site
    element : <Layout/>,

    children : [
      {path : "/",element:<HomePage/>},
      {path : "/All-cards",element:<AllCard/>},
      {path : "/*",element:<ErrorPage/>},
    ]
  }
])

function App() {

  const allPersonnage=[
    {image:'Ahri.avif' , name: "Ahri" , Health:590, Mana:418,Armor:21,MagicArmor:30, AttDmg:53},
    {image:'Akalie.avif' , name: "Akalie" , Health:600, Mana:200,Armor:23,MagicArmor:37, AttDmg:62},
  ]

  return (
    <RouterProvider router={router}/>
  )
}

export default App
