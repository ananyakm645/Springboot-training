import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cantact from "./Pages/Cantact";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<Cantact />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;