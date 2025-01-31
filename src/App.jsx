import React from "react";
import "./App.css";
import AdminPage from "./Pages/Admin/AdminPage";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./Pages/Home/homePage";

function App() {
  return (
    <BrowserRouter>

      <Routes path="/*">
       
       <Route path = "/admin/*" element={<AdminPage/>}/>
       <Route path = "/*" element={ <HomePage/>}/>

         





      </Routes>
 
    </BrowserRouter>
    
  ); 
}

export default App;
