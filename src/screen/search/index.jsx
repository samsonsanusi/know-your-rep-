import './style.css'
import clip_path2 from '../../assets/icons/clip_path2.svg'
import arrow_down from '../../assets/icons/arrow_down.svg'
import gps from '../../assets/icons/gps.svg'
import FooterNav from '../../components/footerNav/index'

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
          <div className='suggested__area--wrapper'>
            <p>Adebanjo, Unilag Rd</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Adebanjo, Unilag Rd</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Adebanjo, Unilag Rd</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Adebanjo, Unilag Rd</p>
          </div>
          <div className='suggested__area--wrapper'>
            <p>Adebanjo, Unilag Rd</p>
          </div>
        </div>
      </section>
      <FooterNav />
    </section>
  )
}

export default Search
