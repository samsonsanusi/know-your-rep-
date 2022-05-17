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
    <div className='search_'>
      <div className='clip_path2'>
        <img src={clip_path2} alt='' />
      </div>
      <div className='container_search'>
        <div className='arrow_down'>
          <img className='arrow_down_icon' src={arrow_down} alt='' />
        </div>

        <section>
          <div>
            <form>
              <input
                class='loca'
                type='text'
                id='address'
                placeholder='Onike, Yaba, Lagos'
              />
              <span className='search_span'>CHANGE</span>
            </form>
          </div>
        </section>

        <div className='gps_section'>
          <img className='gps_icon' src={gps} alt='' />
          <h3 className='gps_text'>Use Current Location</h3>
        </div>
        <h3 className='location_main_header'>POPULAR LOCATION NEAR YOU</h3>

        <div className='location_section'>
          <div className='location_suggestion'>
            <p className='location_search'>Somolu</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Ikorodu West</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Ebute Meta</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Ajanaku Estate</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Tinubu Lake, Surulere</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Femikokusibe</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Lake Bariga Mulewu</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Mushin Olosha</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Clinic Road, Adekunle</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Dadubule Street, Iwaya</p>
          </div>
          <div className='location_suggestion'>
            <p className='location_search'>Adebanjo, Unilag Rd</p>
          </div>
        </div>
      </div>
      <section className='footer_icon_section'>
        <div className='footer_icon'>
          <div className='footer_icon_group'>
            <div>
              <img src={senator_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Reps</h5>
          </div>
          <div className='footer_icon_group'>
            <div>
              <img src={Group_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Petitions</h5>
          </div>
          <div className='footer_icon_group'>
            <div>
              <img src={statistics_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Feedbacks</h5>
          </div>
          <div className='footer_icon_group'>
            <div>
              <img src={Feedbacks_dark} alt='' />
            </div>
            <h5 className='footerHeader'>Reports</h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search
