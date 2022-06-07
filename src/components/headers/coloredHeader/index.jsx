import './style.css'
import Logo_light from '../../../assets/icons/Logo_light.svg'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import Oval_colored from '../../../assets/icons/Oval_colored.svg'

const HeaderOne = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section>
      <header className='main__header'>
        <div className='main__headerWrapper mainContainer'>
          <div className='logo__wrapper'>
            <img src={Logo_light} alt='' />
          </div>
          <div className='hamburger_light'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div className='locationContainer mainContainer'>
          <form>
            <div className='hero__search'>
              <input
                type='text'
                placeholder='Anthony Ajayi, Onike, Yaba, Lagos'
              />
              <img src={Oval_colored} alt='' />
            </div>
          </form>
        </div>
      </header>
    </section>
  )
}
export default HeaderOne
