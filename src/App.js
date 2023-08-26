import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigacija from "./komponente/Navigacija";
import Naruci from "./stranice/Naruci";
import About from "./stranice/About";

function App() {
  return (
    <>
     <BrowserRouter>
         <Navigacija />
         <Routes>
             <Route path="/" element={<Naruci />} />
             <Route path="/about" element={<About />} />
         </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
