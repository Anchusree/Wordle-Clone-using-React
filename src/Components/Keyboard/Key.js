import React, { useContext } from 'react'
import { AppContext } from '../../App'

export default function Key({keyVal,bigKey,disabled,almost,correct}) {
  const {gameOver,onSelectLetter,onEnter,onDelete} = useContext(AppContext)

const selectLetter =()=>{
  if(gameOver.gameOver) return;

  if(keyVal=== "ENTER"){
    onEnter()
  }
  else if(keyVal=== "DEL"){
    onDelete()
  }
  else{
    onSelectLetter(keyVal)
  }
}


  return (
    <div className='key' id={bigKey ? "bigKey" : disabled ? 'disabled':almost ? 'almostletter':correct?'correctLetter':''}
    onClick={selectLetter}>
      {keyVal}
    </div>
  )
}
