import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home" 
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
       <Route path="/"element={<Home/>}/>
       <Route path="/routing"element={<Home/>}/>
        <Route path="/Services"element={<Services/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path="/Contact"element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
