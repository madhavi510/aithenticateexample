// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="abt-container">
      <h1 className="abt-title">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
