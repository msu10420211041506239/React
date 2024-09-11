import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import Split from './Split';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Weather from './Weather';
import Contact from './Contact';
import Login from './Login';
import Mobiles from './Mobiles';
import Furniture from './Furniture';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/Mobiles' element={<Mobiles />}/>  
        <Route Path='/Furniture' element={<Furniture />}/>    
      </Routes>
    </Router> 
    {/* <Split /> */}
  </React.StrictMode>
)

reportWebVitals();
