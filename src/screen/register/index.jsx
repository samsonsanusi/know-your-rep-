import './style.css'
import WhiteHeader from '../../components/headers/whiteHeader/index'
import FooterNav from '../../components/footerNav/index'
const Register = () => {
  return (
    <section>
      <WhiteHeader />
      <main>
        <section className='Register mainContainer'>
          <h1 className='loginGreeting'>
            New here,<span> Register</span>
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
              <div className='formWrapper passwordWrapper'>
                <label htmlFor='password'>Confirm Password</label>
                <input type='password' />
              </div>
            </form>
            <p className='forgotPassword'>Forgot password?</p>
          </div>
          <button className='signIn-btn'>Sign in</button>
          <p className='regAccount'>
            Already have account? <span>Sign up</span>
          </p>
        </section>
      </main>
      <FooterNav />
    </section>
  )
}
export default Register
