import './styles.css'

import challenge1Answers from './challenges/1'
import challenge2Anaswers from './challenges/2'
import challenge3Answers from './challenges/3'
import challenge4Answers from './challenges/4'

const challenges = [
  challenge1Answers,
  challenge2Anaswers,
  challenge3Answers,
  challenge4Answers
]

export default function App() {
  challenges.forEach((challenge, index) => {
    console.log(
      `Challenge ${index + 1}
         answer 1: ${challenge.answer1}
         answer 2: ${challenge.answer2}`
    )
  })

  return (
    <div className="App">
      <p>
        Soon there will be a beautiful table, but until then you can use the
        console...{' '}
        <span aria-label="information desk staff" role="img">
          💁‍♂️
        </span>
      </p>
    </div>
  )
}
