import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form1 from '../Pages/form/form-1';
import Navbar from '../Components/Navbar/navbar';
import HomePage from '../Pages/home/HomePage';
import Cadastro from '../Pages/Form2';



const Routering = () => {
  return (

    <div>
    <div classename="Navbar">
     
    <Navbar/>
     <Router>
      <Routes>
        <Route path='*' exact element={<Cadastro/>}/>
        <Route path="/about" element={Form1} />
          <Route path="/contact" element={HomePage} />
        
      </Routes>
     </Router>
 
  
    </div>
  </div>

  );
}

export default Routering;