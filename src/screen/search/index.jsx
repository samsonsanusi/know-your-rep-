import './style.css'
import clip_path2 from '../../assets/icons/clip_path2.svg'
import arrow_down from '../../assets/icons/arrow_down.svg'
import gps from '../../assets/icons/gps.svg'
import senator_dark from '../../assets/icons/senator_dark.svg'
import Group_dark from '../../assets/icons/Group_dark.svg'
import statistics_dark from '../../assets/icons/statistics_dark.svg'
import Feedbacks_dark from '../../assets/icons/Feedbacks_dark.svg'

function Search() {
  return (
    <section>
      <section className='mainContainer'>
        <div className='clip_path2'>
          <img src={clip_path2} alt='' />
        </div>
        <div className='location__dropdown--icon'>
          <img src={arrow_down} alt='' />
        </div>

        <section className='locationSection'>
          <div className='form__wrapper'>
            <form>
              <input
                class='locationSection__input'
                type='text'
                id='address'
                placeholder='Onike, Yaba, Lagos'
              />
            </form>
            <span className='location__change'>CHANGE</span>
          </div>
          <div className='gps__wrapper'>
            <div className='gps__icon--wrapper'>
              <img src={gps} alt='' />
            </div>
            <h3 className='gps__text'>Use Current Location</h3>
          </div>
          <h3>POPULAR LOCATION NEAR YOU</h3>
        </section>
        <div className='suggested__area--container'>
          <div className='suggested__area--wrapper'>
            <p>Somolu</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Ikorodu West</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Ebute Meta</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Ajanaku Estate</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Tinubu Lake, Surulere</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Femikokusibe</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Lake Bariga Mulewu</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Mushin Olosha</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Clinic Road, Adekunle</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Dadubule Street, Iwaya</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Adebanjo, Unilag Rd</p>
          </div>
        </div>
      </section>
      <section className='bottom__nav'>
        <div className='bottom__nav--list'>
          <div className='footer_icon_group'>
            <div className='bottom__nav--imageContainer'>
              <img src={senator_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Reps</h5>
          </div>
          <div className='footer_icon_group'>
            <div className='bottom__nav--imageContainer'>
              <img src={Group_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Petitions</h5>
          </div>
          <div className='footer_icon_group'>
            <div className='bottom__nav--imageContainer'>
              <img src={statistics_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Feedbacks</h5>
          </div>
          <div className='footer_icon_group'>
            <div className='bottom__nav--imageContainer'>
              <img src={Feedbacks_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Reports</h5>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Search
