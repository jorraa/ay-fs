import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Header = ({text}) => (<h1>{text}</h1>)
const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>


const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good - bad)/all
  const pos = 100*(good/all)
  if(all>0){
    return (
    <div>
      <Header text = "statistics"/>
      <table>
        <StatisticsLine text="good" value = {good}/>
        <StatisticsLine text="neutral" value = {neutral}/>
        <StatisticsLine text="bad" value = {bad}/>
        <StatisticsLine text="all" value = {all}/>
        <StatisticsLine text="average" value = {avg}/>
        <StatisticsLine text="poitive" value = {pos + "%"} />
      </table>
    </div>    
    )
  }else{
    return(<p>No feedback given</p>)
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1) 
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)
   
    return (
    <div>
      <Header text = "give feedback"/>
      <Button handleClick={increaseGoodByOne} text="good"/> 
      <Button handleClick={increaseNeutralByOne} text="neutral"/>          
      <Button handleClick={increaseBadByOne}text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>      
    </div>
    )
  }

ReactDOM.render(<App />, 
  document.getElementById('root')
)