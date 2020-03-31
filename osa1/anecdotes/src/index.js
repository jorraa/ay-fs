import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({anecdote, votes}) => (
  <>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </>
)

const MostVotedAnecdote = ({anecdote, votes}) => {
  if(votes === 0){
    return <p>No votes given yet. Be the first one to vote if you like this anecdote!</p>
  }
  return <Anecdote anecdote={anecdote} votes={votes}/>
}

const findMostVoted = () => 
  points.findIndex((elem) => elem === Math.max(...points))

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = (props) => {
  const [selected, setSelected] = useState(getRandomInt(0, anecdotes.length-1))
  const [votes, setVotes] = useState(0)

  const chooseNextAnecdote = () => setSelected(getRandomInt(0, anecdotes.length-1))

  const voteAnecdote = () => {
    points = [...points]
    points[selected] += 1
    setVotes(votes + 1)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} votes={points[selected]}/>

      <Button handleClick={voteAnecdote} text="vote"/>
      <Button handleClick={chooseNextAnecdote} text="next anecdote"/>

      <h1>Anecdote with most votes</h1>
      <MostVotedAnecdote 
          anecdote={props.anecdotes[findMostVoted()]}
          //feels a bit odd to find max here and 
          //in prev function, but let it go
          votes={Math.max(...points)}
      />
      }
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

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)