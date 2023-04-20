import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WomenList from "./pages/WList/WomenList";
import WomenSalon from "./pages/WSalon/WomenSalon";
import MenList from "./pages/MList/MenList";
import MenSalon from "./pages/MSalon/MenSalon";
import Admin from "./pages/Admin/Admin";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wlist" element={<WomenList />} />
        <Route path="/wlist/:id" element={<WomenSalon />} />
        <Route path="/mlist" element={<MenList />} />
        <Route path="mlist/:id" element={<MenSalon />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
