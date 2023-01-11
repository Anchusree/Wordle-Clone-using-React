
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import GameOver from './Components/GameOver/GameOver';
import Keyboard from './Components/Keyboard/Keyboard';
import { boardwordle, generateWords } from './Components/Words/Word';

export const AppContext = createContext()

function App() {

  const [board,setBoard] = useState(boardwordle)
  const [wordSet,setWordSet] = useState(new Set())
  const [correctWord,setCorrectWord] = useState("")
  const [currentAttempt,setCurrAttempt] = useState({attempt:0,letterPoss:0})
  const [gameOver,setGameOver] = useState({gameOver:false,guessedWord:false})

  const [disabledLetters,setDisabledLetters] = useState([])
  const [almostLetters,setAlmostLetters] = useState([])
  const [correctLetters,setCorrectLetters] = useState([])
  
  
  useEffect(()=>{

    generateWords()
    .then((words)=>{
      // console.log(words);
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
    })

  },[])

  console.log(correctWord)

  const onSelectLetter=(keyVal)=>{
    if(currentAttempt.letterPoss > 4) return;

    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPoss] = keyVal
    setBoard(newBoard)
    setCurrAttempt({
      attempt:currentAttempt.attempt,
      letterPoss:currentAttempt.letterPoss+1
    })
  }

  const onEnter=()=>{
    if(currentAttempt.letterPoss !== 5) return

    let currWord =""
    for(let i=0;i<5;i++){
      currWord += board[currentAttempt.attempt][i]
    }

    if(wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({attempt:currentAttempt.attempt+1,letterPoss:0})
    }
    if(!wordSet.has(currWord.toLowerCase())){
      alert("Word not in the list")
    }

    if(currWord.toLowerCase() === correctWord){
      alert("Congratulations, You won!")
      setGameOver({gameOver:true,guessedWord:true})
    }

    if(currentAttempt.attempt === 5){
      alert("Game Over")
      setGameOver({gameOver:true,guessedWord:true})
      return;
    }
  }

  const onDelete = ()=>{
    if(currentAttempt.letterPoss === 0) return;

    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPoss-1] = ""
    setBoard(newBoard)
    setCurrAttempt({
      ...currentAttempt,
      letterPoss:currentAttempt.letterPoss-1
    })

  }






  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{board,setBoard,correctWord,wordSet,
        setCorrectWord,currentAttempt,setCurrAttempt,gameOver,setGameOver,
        disabledLetters,setDisabledLetters,almostLetters,setAlmostLetters,correctLetters,setCorrectLetters,
        onSelectLetter,onEnter,onDelete
        }}>
      <div className='game'>
        <Board/>

        {gameOver.gameOver ? <GameOver/> :  <Keyboard/>}
       
      </div>

      </AppContext.Provider>
     
      <br/><br/>
    </div>
  );
}

export default App;
