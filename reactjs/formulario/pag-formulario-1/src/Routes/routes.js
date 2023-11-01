import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form1 from '../Pages/form/form-1';

const Routering = () => {
  return (

    <div>
    <div classename="Navbar">
     

     <Router>
      <Routes>
        <Route path='*' exact Component={Form1}/>
        <Route path="/about" component={Form1} />
          <Route path="/contact" component={Form1} />
        
      </Routes>
     </Router>
 
  
    </div>
  </div>

  );
}

export default Routering;