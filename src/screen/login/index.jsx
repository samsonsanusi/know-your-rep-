import './style.css'
import WhiteHeader from '../../components/headers/whiteHeader/index'
import FooterNav from '../../components/footerNav/index'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <section>
      <WhiteHeader />
      <main>
        <section className='Login mainContainer'>
          <h1 className='loginGreeting'>
            Hi there,<span> Login</span>
          </h1>
          <div className='loginContainer'>
            <form>
              <div className='formWrapper'>
                <label htmlFor='email'>Email</label>
                <input type='text' />
              </div>
              <div className='formWrapper passwordWrapper'>
                <label htmlFor='password'>Password</label>
                <input type='password' />
              </div>
            </form>
            <p className='forgotPassword'>Forgot password?</p>
          </div>
          <button className='signIn-btn'>Sign in</button>
          <p className='regAccount'>
            Don’t have account?{' '}
            <Link to='/register'>
              <span>Sign up</span>
            </Link>
          </p>
        </section>
      </main>
      <FooterNav />
    </section>
  )
}
export default Login
