import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Hostels from "./components/Hostels";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
function App(){
return <div>
<NavBar/>
<div>
        <BrowserRouter>
          <Routes>
            <Route path="/FIrstPage" element={<FirstPage />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Hostels" element={<Hostels />}></Route>
            <Route path="/pills-login" element={<Login />}></Route>
            <Route path="/pills-register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </div>


</div>
}
export default App;