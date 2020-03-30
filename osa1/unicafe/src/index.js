import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Header = ({text}) => (<h1>{text}</h1>)

/*
const Feedback = ({feedbacks}) => {
  return (
  <div>
    <Header text = {feedbacks.title}/>
    <Button handleClick={feedbacks.increaseGoodByOne} text={feedbacks.good.text}/>      
    <Button handleClick={feedbacks.increaseNeutralByOne} text={feedbacks.neutral.text}/>          
    <Button handleClick={feedbacks.increaseBadByOne}text={feedbacks.bad.text}/>
  </div>
  )
} 
*/

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>


const Statistics = ({statistics}) => {
  const good = statistics.good.count
  const neutral = statistics.neutral.count
  const bad = statistics.bad.count
  const all = good + neutral + bad
  const avg = (good - bad)/all
  const pos = 100*(good/all)
  if(all>0){
    return (
    <div>
      <Header text = {statistics.title}/>
      <table>
        <StatisticsLine text={statistics.good.text} value = {statistics.good.count}/>
        <StatisticsLine text={statistics.neutral.text} value = {statistics.neutral.count}/>
        <StatisticsLine text={statistics.bad.text} value = {statistics.bad.count}/>
        <StatisticsLine text={statistics.all.text} value = {all}/>
        <StatisticsLine text={statistics.avg.text} value = {avg}/>
        <StatisticsLine text={statistics.pos.text} value = {pos + "%"} />
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
  
  const feedbacks = {
    title: "give feedback",
    good: {
      text: "good",
      handleClick: {increaseGoodByOne}
      // no success yet for handle through props
    },
    neutral: {
      text: "neutral",
      handleClick: {increaseNeutralByOne}
    },
    bad: {
      text: "bad",
      handleClick: {increaseBadByOne}
    }
  }
  
  const statistics = {
    title: "statistics",
    good: {
      count: good,
      text: "good"
    },
    neutral: {
      count: neutral,
      text: "neutral"
    },
    bad: {
      count: bad,
      text: "bad"
    },
    all: {
      text: "all"
    },
    avg: {
      text: "average"
    },
    pos: {
      text: "positive"
    }
  }
  
  return (
    <div>
       {/*<Feedback feedbacks = {feedbacks}/>*/}
      <Header text = {feedbacks.title}/>
      <Button handleClick={increaseGoodByOne} text={feedbacks.good.text}/> 
      <Button handleClick={increaseNeutralByOne} text={feedbacks.neutral.text}/>          
      <Button handleClick={increaseBadByOne}text={feedbacks.bad.text}/>
      <Statistics statistics = {statistics}/>      
    </div>
  )
  }


ReactDOM.render(<App />, 
  document.getElementById('root')
)