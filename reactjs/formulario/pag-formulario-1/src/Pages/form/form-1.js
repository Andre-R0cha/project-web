import React from 'react';
import './form-1.css';




export default function Form1() {
  return (
    <div className='form1-app'>
      <h1> Formulario</h1>
      <div className="form-1">
        <div className="sigle-input">
          <input required type="text" name="name" id="nome" className="input" />
           <span className='span'>NOME</span>
          
        </div>
        <div className="sigle-input">
          <input
            required type="text" name="email" id="mail1" className="input"/>
         <span className='span'>E-MAIL</span>
        
        </div>
        <div className="sigle-input">
          <input
            required type="text" name="endereco" id="adress" className="input"/>
         <span className='span'>ADRESS</span>
         
        </div>

        <div className="bot-env">
          <button className='button'>enviar</button>
        </div>
      </div>
    </div>
  );
}

//  onChange={handleInputChange} value={formValues.name || ''}
