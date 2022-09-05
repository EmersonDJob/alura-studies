import React from 'react'
import Button from '../Button'
import Lista from '../Lista'
import './style.scss' 

 class Formulario extends React.Component {
  render() {
    return (
      <form className='novaTarefa'>
        <div className='inputContainer'>
            <label htmlFor='tarefa'>Adicione novo estudo</label>
            <input
            type="text"
            name="tarefa"
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
             step="1"
             id="tempo "
             min="00:00:00"
             max="01:30:00"
             placeholder="O que voce quer estudar "
             required
             /> 
        </div>      
      </form>
     
    )
  }
}

export default Formulario