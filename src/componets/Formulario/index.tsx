import React from 'react'
import { Interface } from 'readline'
import { ITarefa } from '../../types/Itarefa'
import Button from '../Button'
import Lista from '../Lista'
import './style.scss' 



 class Formulario extends React.Component<{setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>> }> {
  state = {
    tempo: "00:00",
    tarefa: ""
  }

  adicionarTarefa(evento : React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('state: ', this.state)

  }
  render() {
    return (
      <form className='novaTarefa' onSubmit={this.adicionarTarefa.bind(this)}>
        <div className='inputContainer'>
            <label htmlFor='tarefa'>Adicione novo estudo</label>
            <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa : evento.target.value})}

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
             value={this.state.tempo}
             onChange={evento => this.setState({...this.state, tempo : evento.target.value})}
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
}

export default Formulario