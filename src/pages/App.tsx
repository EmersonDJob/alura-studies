import React, {useState} from 'react';
import Button from '../componets/Button';
import Cronometro from '../componets/Cronometro';
import Formulario from '../componets/Formulario';
import Lista from '../componets/Lista';
import { ITarefa } from '../types/Itarefa';
import style from './App.module.scss'



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  const [completado, setCompletado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada :ITarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id
    })))
  }
  function completaTarefa(tarefaCompletada :ITarefa){
    setSelecionado(tarefaCompletada)
  }
  function finalizarTarefa(){
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa, selecionado: false, completado: true
          }
        }
        return tarefa
      }) )
    }
  }
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
     <Cronometro 
     selecionado={selecionado}
     finalizarTarefa={finalizarTarefa}
     />
    </div>
  );
}

export default App;
