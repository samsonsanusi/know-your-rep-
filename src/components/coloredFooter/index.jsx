import './style.css'
import { Progress } from 'antd'

const ColoredFooter = () => {
  return (
    <div className='footer_footer mainContainer'>
      <div className='footer_white_bg'>
        <div className='home_footer_content'>
          <h3 className='footer_content_header'>
            Create a Minister for Hospitality in the Nigerian Government
          </h3>
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
      </div>

      <div className='footer_white_bg'>
        <div className='home_footer_content'>
          <h3 className='footer_content_header'>
            End SARS, Stop Police Brutality and Reform The Nigerian Police Force
          </h3>
          <div className='inner_footer_content'>
            <span className='deen'>
              <h2 className='inner_footer_content_header'>75,746</h2>
              <p className='inner_footer_content_para1'>signatures</p>
            </span>
            <p className='inner_footer_content_para2'>
              Target: <span className='home_footer_number'>50,000</span>
            </p>
          </div>
          <div className='progress_bar'>
            <Progress
              percent={20}
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
      </div>

      <div className='footer_white_bg'>
        <div className='home_footer_content'>
          <h3 className='footer_content_header'>
            Prevent any restrictions on those who refuse a Covid-19 vaccination
          </h3>
          <div className='inner_footer_content'>
            <span className='deen'>
              <h2 className='inner_footer_content_header'>75,746</h2>
              <p className='inner_footer_content_para1'>signatures</p>
            </span>
            <p className='inner_footer_content_para2'>
              Target: <span className='home_footer_number'>200,000</span>
            </p>
          </div>
          <div className='progress_bar'>
            <Progress
              percent={40}
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
      </div>
    </div>
  )
}
export default ColoredFooter
