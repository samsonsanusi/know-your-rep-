import './style.css'
import ColoredHeader from '../../components/headers/coloredHeader/index'
import Filter from '../../components/filter/index'

const Reports = () => {
  return (
    <section>
      <ColoredHeader />
      <Filter />
      <section>
        <div className='map-background'></div>
      </section>
    </section>
  )
}
export default Reports
