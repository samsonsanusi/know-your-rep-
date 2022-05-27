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
import keyboard_backspace_white from '../../assets/icons/keyboard_backspace_white.svg'
import { Progress } from 'antd'
import LogoClear from '../../assets/icons/LogoClear.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import FooterNav from '../../components/footerNav/index'

function Homepage() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <section>
      <header className='HomePageHeader'>
        <div className='clipPath'>
          <svg
            width='135'
            height='40'
            viewBox='0 0 135 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='70.5'
              cy='-30.5'
              r='45.5'
              stroke='url(#paint0_linear_25:117)'
              stroke-width='50'
            />
            <defs>
              <linearGradient
                id='paint0_linear_25:117'
                x1='25'
                y1='-76'
                x2='25'
                y2='15'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.538462' stop-color='#90DF6F' />
                <stop offset='1' stop-color='#00973F' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='LogoNav mainContainer'>
          <img src={LogoClear} alt='' />

          <nav className={navOpen ? 'Nav--items show' : 'Nav--items'}>
            <ul className='nav-list'>
              <li className='nav-listItems'>Home</li>
              <li className='nav-listItems'>About</li>
              <li className='nav-listItems'>Logout</li>
              <li className='nav-listItems'>Places</li>
              <li className='nav-listItems'>Contact</li>
              <li className='nav-listItems'>Elections</li>
              <li className='nav-listItems'>Sign in</li>
            </ul>
          </nav>
          <div className='hamburger__Icon' onClick={toggleNav}>
            <GiHamburgerMenu size={28} />
          </div>
        </div>
      </header>
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
        <div className='footer_footer mainContainer'>
          <h3 className='reps_header footer'>PETITIONS AROUND YOU</h3>
          <div className='footer_white_bg'>
            <div className='home_footer_content'>
              <h3 className='footer_content_header'>
                Create a Minister for Hospitality in the Nigerian Government
              </h3>
              <span className='inner_footer_content'>
                <span className='deen'>
                  <h2 className='inner_footer_content_header'>75,746</h2>
                  <p className='inner_footer_content_para1'>signatures</p>
                </span>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>100,000</span>
                </p>
              </span>
              <div className='progress_bar'>
                <Progress
                  percent={80}
                  showInfo={false}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                  }}
                />
              </div>
            </div>
          </div>

          <div className='footer_white_bg'>
            <div className='home_footer_content'>
              <h3 className='footer_content_header'>
                End SARS, Stop Police Brutality and Reform The Nigerian Police
                Force
              </h3>
              <div className='inner_footer_content'>
                <span className='deen'>
                  <h2 className='inner_footer_content_header'>75,746</h2>
                  <p className='inner_footer_content_para1'>signatures</p>
                </span>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>50,000</span>
                </p>
              </div>
              <div className='progress_bar'>
                <Progress
                  percent={20}
                  showInfo={false}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                  }}
                />
              </div>
            </div>
          </div>

          <div className='footer_white_bg'>
            <div className='home_footer_content'>
              <h3 className='footer_content_header'>
                Prevent any restrictions on those who refuse a Covid-19
                vaccination
              </h3>
              <div className='inner_footer_content'>
                <span className='deen'>
                  <h2 className='inner_footer_content_header'>75,746</h2>
                  <p className='inner_footer_content_para1'>signatures</p>
                </span>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>200,000</span>
                </p>
              </div>
              <div className='progress_bar'>
                <Progress
                  percent={40}
                  showInfo={false}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='view_all'>
            <img src={keyboard_backspace_white} alt='' />
            <h3 className='footer_header'>View All Representatives</h3>
          </div>
        </div>
        <FooterNav />
      </footer>
    </section>
  )
}
export default Homepage
