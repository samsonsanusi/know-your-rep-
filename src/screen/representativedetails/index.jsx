import './style.css'
import arrowLeftWhite from '../../assets/icons/arrowLeftWhite.svg'
import pictureCircle from '../../assets/icons/pictureCircle.png'
import telephone from '../../assets/icons/telephone.svg'
import location_icon from '../../assets/icons/location_icon.svg'
import white_arrow_down from '../../assets/icons/white_arrow_down.svg'
import right_dark_arrow from '../../assets/icons/right_dark_arrow.svg'
import arrow_right_green from '../../assets/icons/arrow_right_green.svg'
import rating_background from '../../assets/icons/rating_background.svg'
import rating_background_half from '../../assets/icons/rating_background_half.svg'
import collapse_infoIcon_small from '../../assets/icons/collapse_infoIcon_small.svg'
import user1 from '../../assets/icons/user1.png'
import FooterNav from '../../components/footerNav'
const RepresentativeDetails = () => {
  return (
    <section>
      <header className='repDetails__header'>
        <div className='top__repIcon mainContainer'>
          <img src={arrowLeftWhite} className='' alt='' />
        </div>
        <div className='repInfo mainContainer'>
          <div className='repInfo__container'>
            <div className='mainContainer repInfoWrapper'>
              <div className='repImage_wrapper'>
                <img src={pictureCircle} alt='' />
              </div>
            </div>
            <div className='personalInfo mainContainer'>
              <h5 className='personalInfo__name'>Sanusi Olawale Samson</h5>
              <h6 className='personalInfo__position'>
                House OF Representative
              </h6>
            </div>
            <div className='personalInfo__cards mainContainer'>
              <div className='personalInfo__rating'>
                <p className='reps_constituency'>PETITIONS</p>
                <h6 className='personalInfo__ratingNumber'>20,257</h6>
              </div>
              <div className='personalInfo__rating'>
                <p className='reps_constituency'>ANSWERED</p>
                <h6 className='personalInfo__ratingNumber'>1,586</h6>
              </div>
              <div className='personalInfo__rating'>
                <p className='reps_constituency'>SOLVED</p>
                <h6 className='personalInfo__ratingNumber'>419</h6>
              </div>
            </div>
            <div className='personalInfo__mobileNumber--container mainContainer '>
              <div className='personalInfo__mobileNumber'>
                <img src={telephone} alt='' />
              </div>
              <h3>090887654567</h3>
            </div>
            <div className='personalInfo__location mainContainer'>
              <img src={location_icon} alt='' />
              <p>
                16, Anthony Ajayi Street, off Fadayase close, Onike, Yaba Lagos.
              </p>
            </div>
            <h3 className='personalInfo__direction'>Get Directions</h3>
          </div>
        </div>
        <div className='mainContainer'>
          <img src={white_arrow_down} alt='' className='collapse__info--icon' />
        </div>
      </header>
      <main>
        <section className='petition__response mainContainer'>
          <h3 className='petition__responseName'>SANUSI'S PETITION RESPONSE</h3>
          <h3 className='petition__responseTopic'>
            End SARS, Stop Police Brutality and Reform The Nigerian Police Force
          </h3>
          <p className='petition__responseDay'>
            The government responded on 10 December 2020
          </p>
          <div className='petition__readMore'>
            <p>
              Landlords can seek possession where tenants have 14 days rent
              arrears, given emergency legislation, landlords must give 6
              months’ notice in such cases before starting formal possession
              proceedings.
            </p>
            <img src={right_dark_arrow} alt='' />
          </div>
          <p className='petition__readMore--link'>Read the response in full</p>
          <h3 className='petition__responseTopic'>
            Increase uniform tax reliefs, especially for healthcare staff
          </h3>
          <p className='petition__responseDay'>
            The government responded on 10 December 2020
          </p>
          <div className='petition__readMore'>
            <p>
              Landlords can seek possession where tenants have 14 days rent
              arrears, given emergency legislation, landlords must give 6
              months’ notice in such cases before starting formal possession
              proceedings.
            </p>
            <img src={right_dark_arrow} alt='' />
          </div>
          <p className='petition__readMore--link'>Read the response in full</p>
          <h3 className='petition__responseTopic'>
            End SARS, Stop Police Brutality and Reform The Nigerian Police Force
          </h3>
          <p className='petition__responseDay'>
            The government responded on 10 December 2020
          </p>
          <div className='petition__readMore'>
            <p>
              Landlords can seek possession where tenants have 14 days rent
              arrears, given emergency legislation, landlords must give 6
              months’ notice in such cases before starting formal possession
              proceedings.
            </p>
            <img src={right_dark_arrow} alt='' />
          </div>
          <p className='petition__readMore--link'>Read the response in full</p>
          <div className='petition__readMore--more'>
            <img src={arrow_right_green} alt='' />
            <h3>View All Responses</h3>
          </div>
        </section>
        <section className='peoples__review mainContainer'>
          <h3 className='peoples__review--header'>PEOPLE'S REVIEWS</h3>
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
          <button className='write__moreFeedback'>Write a Feedback</button>
          <h3 className='peoples__currentReview--header'>
            WHAT PEOPLE ARE SAYING
          </h3>
          <div className='citizen__complaintContainer'>
            <div className='people__review--wrapper'>
              <img src={user1} alt='' />
              <p>
                “We are asking that a Minister for Hospitality be created for
                the current, and successive governments.”
              </p>
            </div>
            <div className='people__ratingWrapper'>
              <h3>3.4</h3>
              <div className='rating__button'>
                <img src={rating_background} alt='' />
              </div>
              <p className='people__rating--Date'>20 Aug’ 2020</p>
            </div>
          </div>
          <div className='citizen__complaintContainer'>
            <div className='people__review--wrapper'>
              <img src={user1} alt='' />
              <p>
                “We are asking that a Minister for Hospitality be created for
                the current, and successive governments.”
              </p>
            </div>
            <div className='people__ratingWrapper'>
              <h3>3.4</h3>
              <div className='rating__button'>
                <img src={rating_background} alt='' />
              </div>
              <p className='people__rating--Date'>20 Aug’ 2020</p>
            </div>
          </div>
          <div className='citizen__complaintContainer'>
            <div className='people__review--wrapper'>
              <img src={user1} alt='' />
              <p>
                “We are asking that a Minister for Hospitality be created for
                the current, and successive governments.”
              </p>
            </div>
            <div className='people__ratingWrapper'>
              <h3>3.4</h3>
              <div className='rating__button'>
                <img src={rating_background} alt='' />
              </div>
              <p className='people__rating--Date'>20 Aug’ 2020</p>
            </div>
          </div>
          <div className='moreReviews'>
            <img src={arrow_right_green} alt='' />
            <h3>View All User Reviews</h3>
          </div>
        </section>
      </main>
      <FooterNav />
    </section>
  )
}

export default RepresentativeDetails
