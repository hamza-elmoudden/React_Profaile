import { Routes,Route } from "react-router-dom";
import './App.css';
import { Home } from "./Pages/Home";
import { Contacet } from "./Pages/Contacet";


function App() {
  return (
    <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/contacet" element={<Contacet/>}/>
    </Routes>
  );
}

export default App;
