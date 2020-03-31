import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  // Tajusin 3 "partin" vakion vasta löydettyäni map-ratkaisun
  // jätin näin
  return (
    <>
        {props.parts.map((value, i) => {
           return <Part key={i} part={value}/>
        })}
    </>  
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(p => {
    sum += p.exercises
  })
  return (
    <p> Number of exercises {sum} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))