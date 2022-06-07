import './style.css'
import ColoredHeader from '../../components/headers/coloredHeader/index'
import Filter from '../../components/filter/index'
import Oval_rep from '../../assets/icons/Oval_rep.svg'
import rep_img1 from '../../assets/icons/rep_img1.png'
import rep_img2 from '../../assets/icons/rep_img2.png'
import rep_img3 from '../../assets/icons/rep_img3.png'
import rep_img4 from '../../assets/icons/rep_img4.png'
import rep_img5 from '../../assets/icons/rep_img5.png'
import FooterNav from '../../components/footerNav/index'

const Feedbacks = () => {
  return (
    <section>
      <ColoredHeader />
      <Filter />
      <section className='repPersonalDetails__section'>
        <div className='repsContainer'>
          <div className='repDetailsWrapper mainContainer'>
            to:<h3 className='repDetails__name'>Garba Lawal</h3>
            <h6 className='repDetails__position'>LOCAL GOVT. CHAIRMAN</h6>
          </div>
          <div className='repDetailsContainer mainContainer'>
            <div>
              <p className='repDetails__feedback'>
                “Growing up in the country, our parents, teachers and elders
                taught us that youths are the leaders of tomorrow.”
              </p>
              <div className='repDetails__ratingContainer'>
                <h3>4.4</h3>
                <div className='rating__cta'>
                  <img src={Oval_rep} alt='' />
                </div>
                <span className='reps__Location'>
                  Akoka, Bariga, Lagos • 1.8 kms away
                </span>
              </div>
            </div>
            <div className='rep__image--container'>
              <img src={rep_img1} alt='' />
            </div>
          </div>
        </div>
        <div className='repsContainer'>
          <div className='repDetailsWrapper mainContainer'>
            to:<h3 className='repDetails__name'> Abubakar Wemimo</h3>
            <h6 className='repDetails__position'>COUNCILLOR</h6>
          </div>
          <div className='repDetailsContainer mainContainer'>
            <div>
              <p className='repDetails__feedback'>
                “An average Nigerian youth does not wake up in the morning
                without fear of getting shot or harassed by the police.”
              </p>
              <div className='repDetails__ratingContainer'>
                <h3>2.5</h3>
                <div className='rating__cta'>
                  <img src={Oval_rep} alt='' />
                </div>
                <span className='reps__Location'>
                  Surelere, Lagos • 2.4 kms away
                </span>
              </div>
            </div>
            <div className='rep__image--container'>
              <img src={rep_img2} alt='' />
            </div>
          </div>
        </div>
        <div className='repsContainer'>
          <div className='repDetailsWrapper mainContainer'>
            to:<h3 className='repDetails__name'> Tosin Amuda Joseph</h3>
            <h6 className='repDetails__position'>HOUSE OF REPRESENTATIVES</h6>
          </div>
          <div className='repDetailsContainer mainContainer'>
            <div>
              <p className='repDetails__feedback'>
                “We've become accustomed to statements like "stop there or I
                will finish your life", "you stupid criminal.”
              </p>
              <div className='repDetails__ratingContainer'>
                <h3>1.8</h3>
                <div className='rating__cta'>
                  <img src={Oval_rep} alt='' />
                </div>
                <span className='reps__Location'>
                  Onike, Yaba Lagos • 10.2 kms away
                </span>
              </div>
            </div>
            <div className='rep__image--container'>
              <img src={rep_img3} alt='' />
            </div>
          </div>
        </div>
        <div className='repsContainer'>
          <div className='repDetailsWrapper mainContainer'>
            to:<h3 className='repDetails__name'> Sanusi Olawale Samson</h3>
            <h6 className='repDetails__position'>STATE OF ASSEMBLY</h6>
          </div>
          <div className='repDetailsContainer mainContainer'>
            <div>
              <p className='repDetails__feedback'>
                “We are asking that a Minister for Hospitality be created for
                the current, and successive governments.”
              </p>
              <div className='repDetails__ratingContainer'>
                <h3>1.8</h3>
                <div className='rating__cta'>
                  <img src={Oval_rep} alt='' />
                </div>
                <span className='reps__Location'>
                  Onike, Yaba Lagos • 10.2 kms away
                </span>
              </div>
            </div>
            <div className='rep__image--container'>
              <img src={rep_img4} alt='' />
            </div>
          </div>
        </div>
        <div className='repsContainer'>
          <div className='repDetailsWrapper mainContainer'>
            to:<h3 className='repDetails__name'>Ogbeun Simidele</h3>
            <h6 className='repDetails__position'>LOCAL GOVT. CHAIRMAN</h6>
          </div>
          <div className='repDetailsContainer mainContainer'>
            <div>
              <p className='repDetails__feedback'>
                “My personal experiences with the police are enough to start my
                own TV show. But where will it all end?”
              </p>
              <div className='repDetails__ratingContainer'>
                <h3>3.9</h3>
                <div className='rating__cta'>
                  <img src={Oval_rep} alt='' />
                </div>
                <span className='reps__Location'>
                  Johnson, Mile 12, Lagos • 6.5 kms away
                </span>
              </div>
            </div>
            <div className='rep__image--container'>
              <img src={rep_img5} alt='' />
            </div>
          </div>
        </div>
      </section>
      <FooterNav />
    </section>
  )
}

export default Feedbacks
