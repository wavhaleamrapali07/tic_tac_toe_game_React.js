
import React ,{useState} from 'react'

const Square = ({value, onSquareClick}) =>{


  // const [value, setValue] = useState(null)

  // const handleClick  =() => {
  //   // console.log("Clicked!")

  //   setValue("X");

  // }

  return (
<button className='square' onClick={onSquareClick}>{value}</button>


  )
}

export default Square
