import './style.css'
import WhiteHeader from '../../components/headers/whiteHeader/index'

const QuizThree = () => {
  return (
    <section>
      <WhiteHeader />
      <section className='quizContainer mainContainer'>
        <div className='quizWrapper'>
          <p className='quizNumber'>10 of 10</p>
          <h2 className='quizQuestions'>
            What is the name of Lagos Mainland Local Government Chairman?
          </h2>
        </div>
        <div className='answerGroup-btn'>
          <button className='answerBtn'>
            <span className='answerBtnWrapper'>
              <span>A.</span>
              <span className='answerBtnSelect-Select'>
                Seyi Tinubu Williams
              </span>
            </span>
          </button>
          <button className='answerBtn'>
            <span className='answerBtnWrapper'>
              <span>A.</span>
              <span className='answerBtnSelect-Select'>
                Seyi Tinubu Williams
              </span>
            </span>
          </button>
          <button className='answerBtn'>
            <span className='answerBtnWrapper'>
              <span>A.</span>
              <span className='answerBtnSelect-Select'>
                Seyi Tinubu Williams
              </span>
            </span>
          </button>
          <button className='answerBtn'>
            <span className='answerBtnWrapper'>
              <span>A.</span>
              <span className='answerBtnSelect-Select'>
                Seyi Tinubu Williams
              </span>
            </span>
          </button>
        </div>
        <button className='signIn-btn'>Finish</button>
      </section>
    </section>
  )
}
export default QuizThree
