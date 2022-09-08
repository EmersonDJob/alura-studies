
import React from 'react'
import './style.scss' 

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void ,
  children?: React.ReactNode,
}

function Button ({onClick , type, children} : Props){
  return(
    <button 
      onClick={onClick}
      className='botao' 
      type={type} 
    >{children}</button>
  )
}


// class Button1 extends React.Component<{ 
//   children: React.ReactNode,
//   type?: "button" | "submit" | "reset" | undefined,
//   onClick?: () => void }>
// {
//   render() {
//     const { type = "button", onClick } = this.props
//     return (
//       <button onClick={onClick} className='botao' type={type}  >{this.props.children}</button>
      
//     )
//   }
// }



export default Button
