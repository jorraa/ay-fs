import React from 'react'

const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <>
          {props.parts.map((value, i) => {
             return <Part key={i} part={value}/>
          })}
      </>  
    )
  }
  
  const Total = ({parts}) => {
    const reducer = (sum, curr) => sum + curr.exercises
    const sum = parts.reduce(reducer,0)
   
    return (
    <h3> total of {sum} exercises</h3>
    )
  }
  
  const Course = (course) => {
    const parts = course.course.parts
    return(
    <>
      <Header course={course.course.name}></Header>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </>
    )
  }

export default Course
