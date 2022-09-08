import React from 'react'
import { Interface } from 'readline'
import { ITarefa } from '../../types/Itarefa'
import Button from '../Button'
import Lista from '../Lista'
import './style.scss' 
import {v4 as uudv4} from 'uuid'
import { useState } from 'react'

interface Props {
  setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario ({setTarefas} :Props){
  const [tarefa, setTarefa] =  useState("")
  const [tempo, setTempo] =  useState("00:00")
 function adicionarTarefa(evento : React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
   setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uudv4()
        }
     ]
    )
    setTarefa("")
    setTempo("00:00")   

  }
  return(
    <form className='novaTarefa' onSubmit={adicionarTarefa}>
    <div className='inputContainer'>
        <label htmlFor='tarefa'>Adicione novo estudo</label>
        <input
        type="text"
        name="tarefa"
        value={tarefa}
        onChange={evento => setTarefa(evento.target.value)}

        id="tarefa"
        placeholder="O que voce quer estudar "
        required
        />
    </div>
    <div className='inputContainer'>
        <label htmlFor='tempo'>Adicione novo estudo</label>
        <input 
         type="time"
         name="tempo"
         value={tempo}
         onChange={evento => setTempo( evento.target.value)}
         step="1"
         id="tempo "
         min="00:00:00"
         max="01:30:00"
         placeholder="O que voce quer estudar "
         required
         /> 
    </div>   
    <Button type="submit">
      Adicionar
    </Button>   
  </form>
  )
}
export default Formulario