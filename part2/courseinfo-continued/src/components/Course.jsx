const Course = ({course}) => (
  <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
     
    </div>
)


const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    {props.parts.map(part => <Part key={part.id} part={part} />)}
    
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({parts}) => {
  const total = parts.reduce((s, p) => (s + p.exercises), 0)
  return (<b>total of {total} exercises</b>)
}

export default Course