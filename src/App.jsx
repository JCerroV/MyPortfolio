import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer";
import background from "../src/assets/background1.jpg"
 
function App() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundImage: `url(${background})` }} className=" bg-cover dark:bg-gray-500 py-6">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about-me" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
      
    </>
  );
}
export default App;
