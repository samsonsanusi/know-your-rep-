import './style.css'
import WhiteHeader from '../../components/headers/whiteHeader'
import repQuiz from '../../assets/icons/repQuiz.png'

const QuizTwo = () => {
  return (
    <section>
      <WhiteHeader />
      <section className='quizContainer mainContainer'>
        <div className='quizWrapper'>
          <p className='quizNumber'>5 of 10</p>
          <h2 className='quizQuestions'>
            What is the name of this Senator from Kogi?
          </h2>
        </div>
        <div className='quizImageContainer'>
          <img className='quizImage' src={repQuiz} alt='' />
        </div>
        <div className='answerBtnContainer'>
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
              <span>B.</span>
              <span className='answerBtnSelect-Select'>Dino Melaye</span>
            </span>
          </button>
          <button className='answerBtn'>
            <span className='answerBtnWrapper'>
              <span>C.</span>
              <span className='answerBtnSelect-Select'>Ogbeun Simidele</span>
            </span>
          </button>
          <button className='answerBtn'>
            <span className='answerBtnWrapper'>
              <span>D.</span>
              <span className='answerBtnSelect-Select'>
                Olatunde Joseph Amuda
              </span>
            </span>
          </button>
        </div>
        <button className='signIn-btn quizTwo-btn'>Continue</button>
      </section>
    </section>
  )
}
export default QuizTwo
