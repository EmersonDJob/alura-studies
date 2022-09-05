import React from 'react';
import Button from '../componets/Button';
import Formulario from '../componets/Formulario';
import Lista from '../componets/Lista';
import style from './style.module.scss' 


function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <Button />
     <Lista />
    </div>
  );
}

export default App;
