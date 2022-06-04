import './style.css'
import filter_list from '../../assets/icons/filter_list.svg'
const Filter = () => {
  return (
    <section className='representative__filterContainer mainContainer'>
      <div className='representative__filterWrapper'>
        <h3>REPRESENTATIVES</h3>
        <span className='filter_icon'>
          <img src={filter_list} alt='' />
          <span className='filter_text'>Filters</span>
        </span>
      </div>
    </section>
  )
}
export default Filter
