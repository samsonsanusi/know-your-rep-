import './style.css'
import filter_list from '../../assets/icons/filter_list.svg'
import Oval_rep from '../../assets/icons/Oval_rep.svg'
import Abdulai_img from '../../assets/icons/Abdulai_img.png'
import tosin_rep from '../../assets/icons/tosin_rep.png'
import joseph_rep from '../../assets/icons/joseph_rep.png'
import tinubu_rep from '../../assets/icons/tinubu_rep.png'
import dino_rep from '../../assets/icons/dino_rep.png'
import HeaderOne from '../../components/headers/coloredHeader/index'
import FooterNav from '../../components/footerNav/index'

function Representatives() {
  return (
    <section>
      <HeaderOne />
      <section className='representative__filterContainer mainContainer'>
        <div className='representative__filterWrapper'>
          <h3>REPRESENTATIVES</h3>
          <span className='filter_icon'>
            <img src={filter_list} alt='' />
            <span className='filter_text'>Filters</span>
          </span>
        </div>
      </section>
      <section className='representative_details '>
        <div className='representative_inner_details mainContainer'>
          <div>
            <h6 className='representative_position'>COUNCILLOR</h6>
            <h5 className='reps_name'>Abdulahi Abubakar</h5>
            <p className='reps_constituency'>
              Onike, Yaba, Lagos • 2.4 kms away
            </p>
            <span className='rating'>
              3.8
              <div className='rating_button'>
                <img className='filled_background' src={Oval_rep} alt='' />
              </div>
              <span className='colored_rating_review'>982 Reviews</span>
            </span>
          </div>
          <div className='representative_image'>
            <img src={Abdulai_img} alt='' />
          </div>
        </div>
        <div className='representative_inner_details mainContainer'>
          <div>
            <h6 className='representative_position'>COUNCILLOR</h6>
            <h5 className='reps_name'>Abdulahi Abubakar</h5>
            <p className='reps_constituency'>
              Onike, Yaba, Lagos • 2.4 kms away
            </p>
            <span className='rating'>
              3.8
              <div className='rating_button'>
                <img className='filled_background' src={Oval_rep} alt='' />
              </div>
              <p className='colored_rating_review'>419 Reviews</p>
            </span>
          </div>
          <div className='representative_image'>
            <img src={tosin_rep} alt='' />
          </div>
        </div>
        <div className='representative_inner_details mainContainer'>
          <div>
            <h6 className='representative_position'>COUNCILLOR</h6>
            <h5 className='reps_name'>Abdulahi Abubakar</h5>
            <p className='reps_constituency'>
              Onike, Yaba, Lagos • 2.4 kms away
            </p>
            <span className='rating'>
              3.8
              <div className='rating_button'>
                <img className='filled_background' src={Oval_rep} alt='' />
              </div>
              <p className='colored_rating_review'>258 Reviews</p>
            </span>
          </div>
          <div className='representative_image'>
            <img src={joseph_rep} alt='' />
          </div>
        </div>
        <div className='representative_inner_details mainContainer'>
          <div>
            <h6 className='representative_position'>COUNCILLOR</h6>
            <h5 className='reps_name'>Abdulahi Abubakar</h5>
            <p className='reps_constituency'>
              Onike, Yaba, Lagos • 2.4 kms away
            </p>
            <span className='rating'>
              3.8
              <div className='rating_button'>
                <img className='filled_background' src={Oval_rep} alt='' />
              </div>
              <p className='colored_rating_review'>419 Reviews</p>
            </span>
          </div>
          <div className='representative_image'>
            <img src={tinubu_rep} alt='' />
          </div>
        </div>
        <div className='representative_inner_details mainContainer'>
          <div>
            <h6 className='representative_position'>COUNCILLOR</h6>
            <h5 className='reps_name'>Abdulahi Abubakar</h5>
            <p className='reps_constituency'>
              Onike, Yaba, Lagos • 2.4 kms away
            </p>
            <span className='rating'>
              3.8
              <div className='rating_button'>
                <img className='filled_background' src={Oval_rep} alt='' />
              </div>
              <p className='colored_rating_review'>982 Reviews</p>
            </span>
          </div>
          <div className='representative_image'>
            <img src={dino_rep} alt='' />
          </div>
        </div>
        <div className='representative_inner_details mainContainer'>
          <div>
            <h6 className='representative_position'>COUNCILLOR</h6>
            <h5 className='reps_name'>Abdulahi Abubakar</h5>
            <p className='reps_constituency'>
              Onike, Yaba, Lagos • 2.4 kms away
            </p>
            <span className='rating'>
              3.8
              <div className='rating_button'>
                <img className='filled_background' src={Oval_rep} alt='' />
              </div>
              <p className='colored_rating_review'>258 Reviews</p>
            </span>
          </div>
          <div className='representative_image'>
            <img src={joseph_rep} alt='' />
          </div>
        </div>
      </section>
      <FooterNav />
    </section>
  )
}
export default Representatives
