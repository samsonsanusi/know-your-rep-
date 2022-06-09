import './style.css'
import LogoClear from '../../../assets/icons/LogoClear.svg'
import OvalHome from '../../../assets/icons/OvalHome.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const WhiteHeader = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <section>
      <header className='HomePageHeader'>
        <div className='clipPath'>
          <img src={OvalHome} alt='' />
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
    </section>
  )
}
export default WhiteHeader
