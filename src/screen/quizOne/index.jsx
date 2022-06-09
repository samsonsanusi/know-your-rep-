import './style.css'
import WhiteHeader from '../../components/headers/whiteHeader/index'
const QuizOne = () => {
  return (
    <section>
      <WhiteHeader />
      <section className='quizContainer mainContainer'>
        <div className='quizWrapper '>
          <p className='quizNumber'>1 of 10</p>
          <h2 className='quizQuestions'>
            How many basic steps are there in making a House of Representative
            in Nigeria?
          </h2>
        </div>
        <div className='quizAnswerContainer'>
          <div className='quizAnswerWrapper'>
            <button className='quiz-btn'>
              <span className='quiz-btn--question'>
                <span className='quiz-btn--number'>1</span>
                <span className='quiz-btn--number2'>One</span>
              </span>
            </button>
            <button className='quiz-btn'>
              <span className='quiz-btn--question'>
                <span className='quiz-btn--number'>5</span>
                <span className='quiz-btn--number2'>Five</span>
              </span>
            </button>

            <button className='quiz-btn'>
              <span className='quiz-btn--question'>
                <span className='quiz-btn--number'>8</span>
                <span className='quiz-btn--number2'>Eight</span>
              </span>
            </button>
            <button className='quiz-btn'>
              <span className='quiz-btn--question'>
                <span className='quiz-btn--number'>2</span>
                <span className='quiz-btn--number2'>Two</span>
              </span>
            </button>
          </div>
        </div>
        <button className='signIn-btn'>Continue</button>
      </section>
    </section>
  )
}
export default QuizOne
