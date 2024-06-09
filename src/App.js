import { Routes,Route } from "react-router-dom";
import './App.css';
import { Home } from "./Pages/Home";
import { Contacet } from "./Pages/Contacet";
import { NotFound } from "./Pages/NotFound";



function App() {
  return (
    <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/contacet" element={<Contacet/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
