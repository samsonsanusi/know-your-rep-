import './style.css'
import Whiteheader from '../../components/headers/whiteHeader/index'
import rating_background from '../../assets/icons/rating_background.svg'
import rating_background_half from '../../assets/icons/rating_background_half.svg'
import collapse_infoIcon_small from '../../assets/icons/collapse_infoIcon_small.svg'
const WriteFeedback = () => {
  return (
    <section>
      <Whiteheader />
      <section className='writeFeedbackContainer mainContainer'>
        <form className='createPetition__form' action=''>
          <div className='writeFeedbackWrapper'>
            <label htmlFor='' className='petitionTitle'>
              Feedback
            </label>
            <textarea
              className='petitionTextarea'
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Start writing your feedback'
            ></textarea>
          </div>
        </form>
        <div className='writeFeedback__rating'>
          <div className='peoples__reviewWrapper'>
            <h1>4.1</h1>
            <div className='ololo'>
              <img src={rating_background} alt='' />
            </div>
            <div className='ololo'>
              <img src={rating_background} alt='' />
            </div>
            <div className='ololo'>
              <img src={rating_background} alt='' />
            </div>
            <div className='ololo'>
              <img src={rating_background_half} alt='' />
            </div>
            <div className='ololo'></div>
            <p className='peoples__review--feedback'>Very Good</p>
            <img src={collapse_infoIcon_small} alt='' />
          </div>
          <p className='peoples__reviewTotal'>1,796 reviews</p>
        </div>
        <button className='signIn-btn'>Submit</button>
      </section>
    </section>
  )
}
export default WriteFeedback
