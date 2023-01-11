import React from 'react'
import Letter from '../Letter/Letter'

export default function Board() {
  return (
    <div className='board'>
        <div className='row'>
            <Letter letterPos={0} attemptValue={0} />
            <Letter letterPos={1} attemptValue={0}/>
            <Letter letterPos={2} attemptValue={0}/>
            <Letter letterPos={3} attemptValue={0}/>
            <Letter letterPos={4} attemptValue={0}/>
        </div>
        <div className='row'>
            <Letter letterPos={0} attemptValue={1} />
            <Letter letterPos={1} attemptValue={1}/>
            <Letter letterPos={2} attemptValue={1}/>
            <Letter letterPos={3} attemptValue={1}/>
            <Letter letterPos={4} attemptValue={1}/>
        </div>
        <div className='row'>
            <Letter letterPos={0} attemptValue={2} />
            <Letter letterPos={1} attemptValue={2}/>
            <Letter letterPos={2} attemptValue={2}/>
            <Letter letterPos={3} attemptValue={2}/>
            <Letter letterPos={4} attemptValue={2}/>
        </div>
        <div className='row'>
            <Letter letterPos={0} attemptValue={3} />
            <Letter letterPos={1} attemptValue={3}/>
            <Letter letterPos={2} attemptValue={3}/>
            <Letter letterPos={3} attemptValue={3}/>
            <Letter letterPos={4} attemptValue={3}/>
        </div>
        <div className='row'>
            <Letter letterPos={0} attemptValue={4} />
            <Letter letterPos={1} attemptValue={4}/>
            <Letter letterPos={2} attemptValue={4}/>
            <Letter letterPos={3} attemptValue={4}/>
            <Letter letterPos={4} attemptValue={4}/>
        </div>
      
    </div>
  )
}
