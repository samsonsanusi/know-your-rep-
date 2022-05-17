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
import Navbar from '../../components/navbar'
import { Progress } from 'antd'
import LogoClear from '../../assets/icons/LogoClear.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

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
        <div className='hero__search'>
          <form>
            <input
              type='text'
              placeholder='Anthony Ajayi, Onike, Yaba, Lagos'
            />
          </form>
          <img src={Ovalsam} alt='' />
        </div>

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

      <section className='reps mainContainer'>
        <h3 className='reps_header'>POPULAR REPRESENTATIVES</h3>
        <div className='reps_section'>
          <div className='card'>
            <img className='senator_images' src={Rectangle_Copy} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <div className='rating'>
                <h4 className='rating_number'>4.5</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>419 Reviews</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <img className='senator_images' src={Rectangle_rep1} alt='' />
            <div className='container'>
              <h6 className='reps_position'>STATE REPRESENTATIVE </h6>
              <h5 className='reps_name'>Abdulahi Abubakar</h5>
              <p className='reps_constituency'>Onike, Yaba, Lagos</p>
              <div className='rating'>
                <h4 className='rating_number'>3.4</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>98 Reviews</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <img className='senator_images' src={Rectangle_rep2} alt='' />
            <div className='container'>
              <h6 className='reps_position'>SENATE PRESIDENT</h6>
              <h5 className='reps_name'>Mohammadu Malami</h5>
              <p className='reps_constituency'>Danfodio, Abuja</p>
              <div className='rating'>
                <h4 className='rating_number'>5.0</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>319 Reviews</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <img className='senator_images' src={Rectangle_rep3} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <div className='rating'>
                <h4 className='rating_number'>4.5</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>419 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='icon_section'>
        <Navbar />
      </section>
      <section className=''>
        <h3 className='reps_header'>TOP RATED REPRESENTATIVES</h3>
        <div className='reps_section'>
          <div className='card'>
            <img className='senator_images' src={Rectangle_rep2} alt='' />
            <div className='container'>
              <h6 className='reps_position'>SENATE PRESIDENT</h6>
              <h5 className='reps_name'>Mohammadu Malami</h5>
              <p className='reps_constituency'>Danfodio, Abuja</p>
              <div className='rating'>
                <h4 className='rating_number'>5.0</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>319 Reviews</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <img className='senator_images' src={Rectangle_rep1} alt='' />
            <div className='container'>
              <h6 className='reps_position'>STATE REPRESENTATIVE </h6>
              <h5 className='reps_name'>Abdulahi Abubakar</h5>
              <p className='reps_constituency'>Onike, Yaba, Lagos</p>
              <div className='rating'>
                <h4 className='rating_number'>3.4</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>98 Reviews</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <img className='senator_images' src={Rectangle_Copy} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <div className='rating'>
                <h4 className='rating_number'>4.5</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>419 Reviews</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <img className='senator_images' src={Rectangle_rep3} alt='' />
            <div className='container'>
              <h6 className='reps_position'>HOUSE OF REPRESENTATIVE </h6>
              <h5 className='reps_name'>Shina Peller</h5>
              <p className='reps_constituency'>QUILOX, Lagos</p>
              <div className='rating'>
                <h4 className='rating_number'>4.5</h4>
                <div className='rating_button '>
                  <img className='filled_background' src={Oval2} alt='' />
                </div>
                <p className='reviews'>419 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='reps view_all'>
        <div className='colored_arrow'>
          <img src={keyboard_backspace} alt='' />
        </div>
        <h3 className='colored_header'>View All Representatives</h3>
      </div>
      <section className='home_footer_section'>
        <div className='reps footer_footer'>
          <h3 className='reps_header footer'>PETITIONS AROUND YOU</h3>
          <div className='footer_white_bg'>
            <div className='home_footer_content'>
              <h3 className='footer_content_header'>
                Create a Minister for Hospitality in the Nigerian Government
              </h3>
              <div className='inner_footer_content'>
                <h2 className='inner_footer_content_header'>75,746</h2>
                <p className='inner_footer_content_para1'>signatures</p>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>100,000</span>
                </p>
              </div>
              <div className='progress_bar' style={{ width: 300 }}>
                <Progress
                  percent={50}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                  }}
                  percent={80}
                />
              </div>
            </div>
          </div>

          <div className='footer_white_bg'>
            <div className='home_footer_content'>
              <h3 className='footer_content_header'>
                Create a Minister for Hospitality in the Nigerian Government
              </h3>
              <div className='inner_footer_content'>
                <h2 className='inner_footer_content_header'>75,746</h2>
                <p className='inner_footer_content_para1'>signatures</p>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>100,000</span>
                </p>
              </div>
              <div className='progress_bar' style={{ width: 300 }}>
                <Progress
                  percent={80}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                  }}
                  percent={80}
                />
              </div>
            </div>
          </div>

          <div className='footer_white_bg'>
            <div className='home_footer_content'>
              <h3 className='footer_content_header'>
                Create a Minister for Hospitality in the Nigerian Government
              </h3>
              <div className='home_inner_footer_content'>
                <h2 className='inner_footer_content_header'>75,746</h2>
                <p className='inner_footer_content_para1'>signatures</p>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>100,000</span>
                </p>
              </div>
              <div className='progress_bar' style={{ width: 300 }}>
                <Progress
                  percent={40}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                  }}
                  percent={40}
                />
              </div>
            </div>
          </div>
          <div className='reps view_all home_white'>
            <div className='colored_arrow'>
              <img src={keyboard_backspace_white} alt='' />
            </div>
            <h3 className='colored_header footer_header'>
              View All Representatives
            </h3>
          </div>
        </div>
      </section>
    </section>
  )
}
export default Homepage
