import React, { useState } from 'react'
import './quixPage.scss'
import { useParams, Link } from 'react-router-dom'

const QuizPage = () => {
  const { id } = useParams()

  const questions = [
    {
      questionText: 'HTML is the standard ____language for creating Web pages.',
      answerOptions: [
        { answerText: 'scripting', isCorrect: false },
        { answerText: 'programming', isCorrect: false },
        { answerText: 'styling', isCorrect: false },
        { answerText: 'markup', isCorrect: true },
      ],
    },
    {
      questionText: 'HTML stands for_______?',
      answerOptions: [
        { answerText: 'Hyperactive Text Markup Language', isCorrect: false },
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'Hyper Text Machine Language', isCorrect: false },
        { answerText: 'None of these', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which is the correct syntax to include comment in an HTML document?',
      answerOptions: [
        { answerText: '//', isCorrect: false },
        { answerText: '/* Comment */', isCorrect: false },
        { answerText: '// Comment //', isCorrect: false },
        { answerText: '<!-- Comment -->', isCorrect: true },
      ],
    },
    {
      questionText: 'Which element/tag defines a paragraph?',
      answerOptions: [
        { answerText: '<p>', isCorrect: false },
        { answerText: '<pre>', isCorrect: false },
        { answerText: '<panel>', isCorrect: false },
        { answerText: 'None of the above', isCorrect: true },
      ],
    },
    {
      questionText:
        'Which tag contains the meta information about the HTML page?',
      answerOptions: [
        { answerText: '<html>', isCorrect: false },
        { answerText: '<title>', isCorrect: false },
        { answerText: '<head>', isCorrect: true },
        { answerText: '<body>', isCorrect: false },
      ],
    },
    {
      questionText: 'HTML tags with no content are called _____.',
      answerOptions: [
        { answerText: 'Special tags', isCorrect: false },
        { answerText: 'Advanced tags', isCorrect: false },
        { answerText: 'Empty tags', isCorrect: true },
        { answerText: 'Other tags', isCorrect: false },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  return (
    <div className='quizPage'>
      <div className='quizPage_container'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
            <Link to='/' style={{ textDecoration: 'none' }}>
              <button>Back to Home</button>
            </Link>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default QuizPage
