import './style.css'
import senator from '../../assets/icons/senator.png'
import Ovalsam from '../../assets/icons/Ovalsam.svg'
import Vector from '../../assets/icons/Vector.svg'
import Group from '../../assets/icons/Group.svg'
import statistics from '../../assets/icons/statistics.svg'
import local_offer_material from '../../assets/icons/local_offer_material.svg'
import Rectangle_Copy from '../../assets/icons/Rectangle_Copy.png'
import Oval2 from '../../assets/icons/Oval2.png'
import Rectangle_rep1 from '../../assets/icons/Rectangle_rep1.png'
import Rectangle_rep2 from '../../assets/icons/Rectangle_rep2.png'
import Rectangle_rep3 from '../../assets/icons/Rectangle_rep3.png'
import keyboard_backspace from '../../assets/icons/keyboard_backspace.svg'
import ColoredFooter from '../../components/coloredFooter/index'
import keyboard_backspace_white from '../../assets/icons/keyboard_backspace_white.svg'
import FooterNav from '../../components/footerNav/index'
import WhiteHeader from '../../components/headers/whiteHeader/index'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section>
      <WhiteHeader />
      <section className='heroSection mainContainer'>
        <h1 className='hero__header'>Know your local area representatives.</h1>
        <form>
          <div className='hero__search'>
            <input
              type='text'
              placeholder='Anthony Ajayi, Onike, Yaba, Lagos'
            />
            <img src={Ovalsam} alt='' />
          </div>
        </form>

        <div className='hero__features'>
          <div>
            <div className='hero__feature--wrapper reps__background'>
              <img src={senator} alt='' />
            </div>
            <h5 className='text'>Reps</h5>
          </div>
          <div>
            <div className='hero__feature--wrapper petition__background'>
              <img className='feature__petition__icon' src={Vector} alt='' />
            </div>
            <h5 className='text'>Petitions</h5>
          </div>
          <div>
            <div className='hero__feature--wrapper feedback__background'>
              <img src={Group} alt='' />
            </div>
            <h5 className='text'>Feedbacks</h5>
          </div>
          <div>
            <div className='hero__feature--wrapper report__background'>
              <img src={statistics} alt='' />
            </div>
            <h5 className='text'>Reports</h5>
          </div>
        </div>

        <div className='hero_quiz'>
          <div className='home_question_background'>
            <img src={local_offer_material} alt='' />
            Answer these questions & <span>Get N1,000 Voucher</span>
          </div>
        </div>
      </section>
      <section className='popular__repSection mainContainer'>
        <h3>POPULAR REPRESENTATIVES</h3>
        <div className='reps_section'>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep2} alt='' />
            <div className='container'>
              <h6 className='reps_position'>SENATE PRESIDENT</h6>
              <h5 className='reps_name'>Mohammadu Malami</h5>
              <p className='reps_constituency'>Danfodio, Abuja</p>
              <span className='rating'>
                5.0
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>319 Reviews</span>
              </span>
            </div>
          </div>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep2} alt='' />
            <div className='container'>
              <h6 className='reps_position'>SENATE PRESIDENT</h6>
              <h5 className='reps_name'>Mohammadu Malami</h5>
              <p className='reps_constituency'>Danfodio, Abuja</p>
              <span className='rating'>
                5.0
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>319 Reviews</span>
              </span>
            </div>
          </div>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep2} alt='' />
            <div className='container'>
              <h6 className='reps_position'>SENATE PRESIDENT</h6>
              <h5 className='reps_name'>Mohammadu Malami</h5>
              <p className='reps_constituency'>Danfodio, Abuja</p>
              <span className='rating'>
                5.0
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>319 Reviews</span>
              </span>
            </div>
          </div>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep3} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <span className='rating'>
                4.5
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>419 Reviews</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='popular__repSection top__ratedRepresentative mainContainer'>
        <h3>TOP RATED REPRESENTATIVES</h3>
        <div className='reps_section'>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep2} alt='' />
            <div className='container'>
              <h6 className='reps_position'>SENATE PRESIDENT</h6>
              <h5 className='reps_name'>Mohammadu Malami</h5>
              <p className='reps_constituency'>Danfodio, Abuja</p>
              <span className='rating'>
                5.0
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>319 Reviews</span>
              </span>
            </div>
          </div>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep1} alt='' />
            <div className='container'>
              <h6 className='reps_position'>STATE REPRESENTATIVE </h6>
              <h5 className='reps_name'>Abdulahi Abubakar</h5>
              <p className='reps_constituency'>Onike, Yaba, Lagos</p>
              <span className='rating'>
                3.4
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>98 Reviews</span>
              </span>
            </div>
          </div>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_Copy} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <span className='rating'>
                4.5
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>419 Reviews</span>
              </span>
            </div>
          </div>
          <div className='olamide'>
            <img className='senator_images' src={Rectangle_rep3} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <span className='rating'>
                4.5
                <div className='rating_button '>
                  <img src={Oval2} alt='' />
                </div>
                <span className='reviews'>419 Reviews</span>
              </span>
            </div>
          </div>
        </div>
        <span className='view_all'>
          <img src={keyboard_backspace} alt='' />
          <h3 className='colored_header'>View All Representatives</h3>
        </span>
      </section>
      <footer className='home_footer_section'>
        <h3 className='reps_header footer mainContainer'>
          PETITIONS AROUND YOU
        </h3>
        <ColoredFooter />
        <Link to='/petitions'>
          <div className='view_all mainContainer'>
            <img src={keyboard_backspace_white} alt='' />
            <h3 className='footer_header'>View All Petitions Around You</h3>
          </div>
        </Link>
      </footer>
      <FooterNav />
    </section>
  )
}
export default Homepage
