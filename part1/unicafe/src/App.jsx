import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


const StatisticLine = ({text, stat}) => (
  <tr>
    <th>{text}</th>
    <td>{stat}</td>
  </tr>
)


const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0){
    return (
      <div>No feedback given</div>
    )
  } 
  return (
    <table><tbody>
      <StatisticLine text="good" stat={good} />
      <StatisticLine text="neutral" stat={neutral} />
      <StatisticLine text="bad" stat={bad} />
      <StatisticLine text="all" stat={all} />
      <StatisticLine text="average" stat={(good - bad)/all} />
      <StatisticLine text="positive" stat={good /(all) + " %"} />
    </tbody></table>
  )
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button onClick={() => setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App