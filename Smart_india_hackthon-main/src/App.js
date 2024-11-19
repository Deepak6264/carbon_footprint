import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from "./components/userinterface/homepage/HomePage"; 
import Largescalecalculator from "./components/userinterface/homepage/Largescalecalculator";
import About from './components/userinterface/homepage/About';
import Header from './components/userinterface/homepage/Header';
import CompanyCard from "./components/admin/Companycard";
import Industryform from "./components/userinterface/homepage/Form";
import CompanyTable from "./components/admin/CarbonCompanyTable"
import Usercalculator from "./components/userinterface/homepage/Usercalci"
import Aftercompanycard from "./components/userinterface/homepage/Comapanycardafter"
import Register from "./components/userinterface/homepage/Largecompany/Register";
import Login from "./components/userinterface/login/logincard";
import Createacc from "./components/userinterface/login/createacc"
import Try from "./components/userinterface/homepage/Largecompany/try"

function App() {
  return (

    <Router>
      <Header sx={{position:'absolute'}}/>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/Aftercompanycard" element={<Aftercompanycard />}></Route>  
                  <Route path="/" element={<HomePage />} />
          <Route path="/largescalecalculator" element={<Largescalecalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/companycard/:companyId" element={<CompanyCard />} />

          <Route path="/industryform" element={<Industryform />} />
          <Route path="/admincompanytable" element={<CompanyTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usercalculator" element={<Usercalculator />} />  // Add new route for user calculator here.
          <Route path="/create" element={<Createacc />}/>   
          <Route path="/try" element={<Try />}/>        
       </Routes>    </div>
    </Router>
  );
}

export default App;
