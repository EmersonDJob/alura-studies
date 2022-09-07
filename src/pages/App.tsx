import React, {useState} from 'react';
import Button from '../componets/Button';
import Cronometro from '../componets/Cronometro';
import Formulario from '../componets/Formulario';
import Lista from '../componets/Lista';
import style from './App.module.scss'



function App() {
  const [tarefas, setTarefas] = useState([
    {
    tarefa: "React",
    tempo: "02:00"
     },
     {
        tarefa: "Javascript",
        tempo: "02:00"
    },
])
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista tarefas={tarefas} />
     <Cronometro/>
    </div>
  );
}

export default App;
