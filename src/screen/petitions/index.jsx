import './style.css'
import ColoredHeader from '../../components/headers/coloredHeader/index'
import Filter from '../../components/filter/index'
import keyboard_backspace from '../../assets/icons/keyboard_backspace.svg'
import ColoredFooter from '../../components/coloredFooter/index'
import Shape from '../../assets/icons/icon/Shape.svg'
import FooterNav from '../../components/footerNav/index'
import right_dark_arrow from '../../assets/icons/right_dark_arrow.svg'
const Petitions = () => {
  return (
    <section>
      <ColoredHeader />
      <Filter />
      <main>
        <section className='morePetitions'>
          <div className='petitionContainer mainContainer'>
            <div>
              <h1 className='petittion__Numberheader'>254</h1>
              <p className='petition__rsponsePara'>
                Petitions got a response from the Government
              </p>
            </div>
            <div>
              <h1 className='petittion__Numberheader'>43</h1>
              <p className='petition__rsponsePara'>
                Petitions were debated in the House of Commons
              </p>
            </div>
          </div>
          <div className='mainContainer'>
            <h3 className='petition__title'>
              End SARS, Stop Police Brutality and Reform The Nigerian Police
              Force
            </h3>
            <p className='petition__numbers'>
              75,746
              <span className='petition__signature'>
                signatures in the last hour
              </span>
            </p>
            <h3 className='petition__title'>
              End child food poverty – no child should be going hungry
            </h3>
            <p className='petition__numbers'>
              1,103,940
              <span className='petition__signature'>
                signatures in the last hour
              </span>
            </p>
            <h3 className='petition__title'>
              Reclose schools and colleges due to increase in COVID-19 cases
            </h3>
            <p className='petition__numbers'>
              417,325
              <span className='petition__signature'>
                signatures in the last hour
              </span>
            </p>
            <h3 className='petition__title'>
              Limit the Sale and Use of Fireworks to Organisers of Licensed
              Displays Only
            </h3>
            <p className='petition__numbers'>
              279,372
              <span className='petition__signature'>
                signatures in the last hour
              </span>
            </p>
            <div className='add__more--petitionContainer'>
              <h3 className='petition__title'>
                Implement sanctions against the Nigerian Government and
                officials
              </h3>
              <p className='petition__numbers'>
                279,372
                <span className='petition__signature'>
                  signatures in the last hour
                </span>
              </p>
              <div className='add__more--petitionWrapper'>
                <img src={Shape} alt='' />
              </div>
            </div>
            <h3 className='petition__title'>
              Implement sanctions against the Nigerian Government and officials
            </h3>
            <p className='petition__numbers'>
              279,372
              <span className='petition__signature'>
                signatures in the last hour
              </span>
            </p>
          </div>
          <span className='view_all more__petition mainContainer'>
            <img src={keyboard_backspace} alt='' />
            <h3 className='colored_header'>View All Petitions</h3>
          </span>
        </section>
        <section className='popularPetitionSection'>
          <h3 className='reps_header mainContainer'>POPULAR PETITIONS</h3>
          <ColoredFooter />
        </section>
        <section className='Popular__petitionSection mainContainer'>
          <h3 className='reps_header governmentResponse'>
            GOVERNMENT RESONSES
          </h3>
          <h3 className='petition__responseTopic'>
            End SARS, Stop Police Brutality and Reform The Nigerian Police Force
          </h3>
          <p className='petition__responseDay'>
            The government responded on 10 December 2020
          </p>
          <div className='petition__readMore'>
            <p>
              Landlords can seek possession where tenants have 14 days rent
              arrears, given emergency legislation, landlords must give 6
              months’ notice in such cases before starting formal possession
              proceedings.
            </p>
            <img src={right_dark_arrow} alt='' />
          </div>
          <p className='petition__readMore--link'>Read the response in full</p>
          <h3 className='petition__responseTopic'>
            End SARS, Stop Police Brutality and Reform The Nigerian Police Force
          </h3>
          <p className='petition__responseDay'>
            The government responded on 10 December 2020
          </p>
          <div className='petition__readMore'>
            <p>
              Landlords can seek possession where tenants have 14 days rent
              arrears, given emergency legislation, landlords must give 6
              months’ notice in such cases before starting formal possession
              proceedings.
            </p>
            <img src={right_dark_arrow} alt='' />
          </div>
          <p className='petition__readMore--link'>Read the response in full</p>
          <h3 className='petition__responseTopic'>
            End SARS, Stop Police Brutality and Reform The Nigerian Police Force
          </h3>
          <p className='petition__responseDay'>
            The government responded on 10 December 2020
          </p>
          <div className='petition__readMore'>
            <p>
              Landlords can seek possession where tenants have 14 days rent
              arrears, given emergency legislation, landlords must give 6
              months’ notice in such cases before starting formal possession
              proceedings.
            </p>
            <img src={right_dark_arrow} alt='' />
          </div>
          <p className='petition__readMore--link'>Read the response in full</p>
          <span className='view_all more__petition'>
            <img src={keyboard_backspace} alt='' />
            <h3 className='colored_header'>View All Petitions</h3>
          </span>
        </section>
      </main>
      <FooterNav />
    </section>
  )
}

export default Petitions
