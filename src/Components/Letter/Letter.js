import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'

export default function Letter({letterPos,attemptValue}) {

  const {board,correctWord,currentAttempt,setDisabledLetters,setAlmostLetters,setCorrectLetters} = useContext(AppContext)
    const letter = board[attemptValue][letterPos]


    const correct = correctWord.toUpperCase()[letterPos] === letter

    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)

    const letterState = currentAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" :"error")

    useEffect(()=>{
      if(letter !== "" && !correct && !almost){
        setDisabledLetters((prev)=>[...prev,letter])
      }
      if(almost){
        setAlmostLetters((prev)=>[...prev,letter])
      }
      if(correct){
        setCorrectLetters((prev)=>[...prev,letter])
      }

    },[currentAttempt.attempt])


  return (
    <div className='letter' id={letterState ? letterState : ''} value={letter}>
      {letter}
    </div>
  )
}
