import React, { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import Key from './Key'

export default function Keyboard() {

  const {currentAttempt,gameOver,disabledLetters,almostLetters,correctLetters,onSelectLetter,onEnter,onDelete} = useContext(AppContext)


    const key1 = ["Q","W","E","R","T","Y","U","I","O","P"]
    const key2 = ["A","S","D","F","G","H","J","K","L"]
    const key3 = ["Z","X","C","V","B","N","M"]


    const handleKeyboard = useCallback((e)=>{
      if(gameOver.gameOver) return;

      if(e.key === "Enter"){
        onEnter()
      }
      else if(e.key === "Backspace"){
        onDelete()
      }
      else{
        key1.forEach(key => {
          if(e.key.toLowerCase() === key.toLowerCase()){
            onSelectLetter(key)
          }
        });
        key2.forEach(key => {
          if(e.key.toLowerCase() === key.toLowerCase()){
            onSelectLetter(key)
          }
        });
        key3.forEach(key => {
          if(e.key.toLowerCase() === key.toLowerCase()){
            onSelectLetter(key)
          }
        });
      }
    },[currentAttempt])


    useEffect(()=>{
      document.addEventListener("keydown",handleKeyboard)
      return ()=>{
        document.removeEventListener("keydown",handleKeyboard)
      }
    },[handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line'>
        {
            key1.map((value,index)=>{
                return(
                    <Key key={index} keyVal={value} disabled={disabledLetters.includes(value)} almost={almostLetters.includes(value)} correct={correctLetters.includes(value)}/>
                )
            })
        }
      </div>
      <div className='line'>
      {
            key2.map((value,index)=>{
                return(
                  <Key key={index} keyVal={value} disabled={disabledLetters.includes(value)} almost={almostLetters.includes(value)} correct={correctLetters.includes(value)}/>
                )
            })
        }
      </div>
      <div className='line'>
        <Key keyVal={"ENTER"} bigKey/>
      {
            key3.map((value,index)=>{
                return(
                  <Key key={index} keyVal={value} disabled={disabledLetters.includes(value)} almost={almostLetters.includes(value)} correct={correctLetters.includes(value)}/>
                )
            })
        }
        <Key keyVal={"DEL"} bigKey/>
      </div>
    </div>
  )
}
