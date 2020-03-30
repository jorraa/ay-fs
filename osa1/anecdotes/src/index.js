import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)

  
  const checkBest = () => {
    console.log("points", points)
    const mostVotes = Math.max(...points)
    console.log("mostVotes", mostVotes)
    const isBest = (element) => element === mostVotes;
    const best = points.findIndex(isBest)
    console.log("best", best)
    return best
  }
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const chooseNextAnecdote = () => setSelected(getRandomInt(0, anecdotes.length-1))

  const voteAnecdote = () => {
    points = [...points]
    points[selected] += 1
    setVotes(votes + 1)
  }
  checkBest()
  chooseNextAnecdote()
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={voteAnecdote} text="vote"/>
      <Button handleClick={chooseNextAnecdote} text="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let points = new Array(anecdotes.length).fill(0)
  console.log("points", points)

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)