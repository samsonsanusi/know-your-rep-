import './style.css'
import senator_dark from '../../assets/icons/senator_dark.svg'
import Group_dark from '../../assets/icons/Group_dark.svg'
import statistics_dark from '../../assets/icons/statistics_dark.svg'
import Feedbacks_dark from '../../assets/icons/Feedbacks_dark.svg'
import { Link } from 'react-router-dom'

const FooterNav = () => {
  return (
    <section className='bottom__nav'>
      <div className='bottom__nav--list'>
        <Link to='/reps'>
          <div className='footer_icon_group'>
            {/* <div className='bottom__nav--imageContainer'> */}
              <img src={senator_dark} alt='' />
            {/* </div> */}
            <h5 className='footerHeader'>Reps</h5>
          </div>
        </Link>
        <Link to='/petitions'>
          <div className='footer_icon_group'>
            {/* <div className='bottom__nav--imageContainer'> */}
              <img src={Group_dark} alt='' />
            {/* </div> */}
            <h5 className='footerHeader'>Petitions</h5>
          </div>
        </Link>
        <Link to='/feedbacks'>
          <div className='footer_icon_group'>
            {/* <div className='bottom__nav--imageContainer'> */}
              <img src={statistics_dark} alt='' />
            {/* </div> */}
            <h5 className='footerHeader'>Feedbacks</h5>
          </div>
        </Link>

        <div className='footer_icon_group'>
          {/* <div className='bottom__nav--imageContainer'> */}
            <img src={Feedbacks_dark} alt='' />
          {/* </div> */}
          <h5 className='footerHeader'>Reports</h5>
        </div>
      </div>
    </section>
  )
}
export default FooterNav
