import './style.css'
import Logo_light from '../../assets/icons/Logo_light.svg'
import arrowLeftWhite from '../../assets/icons/arrowLeftWhite.svg'
import Filter from '../../components/filter/index'
import keyboard_backspace from '../../assets/icons/keyboard_backspace.svg'
import keyboard_backspace_white from '../../assets/icons/keyboard_backspace_white.svg'
import { Progress } from 'antd'
import sms_icon from '../../assets/icons/sms_icon.svg'
import mail_icon from '../../assets/icons/mail_icon.svg'
import facebook_icon from '../../assets/icons/facebook_icon.svg'
import twitter_icon from '../../assets/icons/twitter_icon.svg'
import FooterNav from '../../components/footerNav/index'
const PetitionDetails = () => {
  return (
    <section>
      <header className='headerSmall'>
        <div className='headerSmall__nav mainContainer'>
          <img src={Logo_light} alt='' />
          <img src={arrowLeftWhite} className='' alt='' />
        </div>
      </header>
      <Filter />
      <main>
        <section className='petitionDetails'>
          <div className='mainContainer'>
            <h3 className='petition__title'>
              End SARS, Stop Police Brutality and Reform The Nigerian Police
              Force
            </h3>
            <p className='petition__moreDetails'>
              The UK hospitality industry. Responsible for around 3m jobs,
              generating £130bn in activity, resulting in £38bn in taxation.
              Yet, unlike the Arts or Sports, we do not have a dedicated
              Minister.
            </p>
            <p className='petition__moreDetails petition__moreDetails--bottom'>
              We are asking that a Minister for Hospitality be created for the
              current, and successive governments.
            </p>
            <div className='sign__petitionContainer'>
              <span className='more__petition--details'>
                <img src={keyboard_backspace} alt='' />
                <h3 className='colored_header--small'>More Details</h3>
              </span>
              <button className='sign__Petition--Btn'>
                Sign this petition
                <img src={keyboard_backspace_white} alt='' />
              </button>
            </div>
            <div>
              <span className='inner_footer_content'>
                <span className='deen'>
                  <h2 className='inner_footer_content_header'>75,746</h2>
                  <p className='inner_footer_content_para1'>signatures</p>
                </span>
                <p className='inner_footer_content_para2'>
                  Target: <span className='home_footer_number'>100,000</span>
                </p>
              </span>
              <div className='progress_bar'>
                <Progress
                  percent={80}
                  showInfo={false}
                  size='small'
                  status='active'
                  strokeColor={{
                    '0%': '#D9A01B',
                    '100%': '#D9A01B',
                  }}
                />
              </div>
            </div>
            <div>
              <h3 className='rep__responseTimeHeader'>GOVERNMENT RESPONDED</h3>
              <p className='rep__responseTime'>
                This response was given on 3 November 2020
              </p>
              <p className='rep__responseDetails'>
                Landlords can seek possession where tenants have 14 days rent
                arrears, given emergency legislation, landlords must give 6
                months’ notice in such cases before starting formal possession
                proceedings.
              </p>
              <p className='rep__responseMoreDetails'>
                Read the response in full
              </p>
            </div>
            <div>
              <h3 className='rep__responseTimeHeader'>
                AT 100,000 SIGNATURES...
              </h3>
              <p className='rep__responseDetails'>
                At 100,000 signatures, this petition will be considered for
                debate in Parliament
              </p>
            </div>
            <div className='socialMedia_wrapper'>
              <div className='contactMedium smsMedium'>
                <img src={sms_icon} alt='' />
              </div>
              <div className='contactMedium mailMedium'>
                <img src={mail_icon} alt='' />
              </div>
              <div className='contactMedium facebookMedium'>
                <img src={facebook_icon} alt='' />
              </div>
              <div className='contactMedium twitterMedium'>
                <img src={twitter_icon} alt='' />
              </div>
            </div>
            <div className='petitionCreator__Container'>
              <p className='petitionCreator'>Created by</p>
              <h3 className='petitionCreator__name'>Toyosi Amuda</h3>
              <p className='petitionDeadline'>Deadline</p>
              <h3 className='petitionDeadline__date'> 6 April 2021</h3>
              <p className='petitionDeadline'>All petitions run for 6 months</p>
            </div>
          </div>
        </section>
      </main>
      <FooterNav />
    </section>
  )
}
export default PetitionDetails
