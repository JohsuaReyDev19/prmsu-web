import logo from '../../assets/prmsu.png'
import menu_icon from '../../assets/menu-icon.png'
import './Navbar.css'
import './Navbar'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const taggleMenu = () =>{
    menu? setMenu(false) : setMenu(true);
  }
  return (
    <div className='nav'>
        <div className='cont-logo'>
        <img src={logo} alt="" className='logo'/>
        <h1>PRMSU</h1>
        </div>
      <ul className={menu? '' : 'hide-mobile-menu'}>
        <li><a href=""><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></a></li>
        <li><a href=""><Link to='Testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></a></li>
        <li><a href=""><Link to='about' smooth={true} offset={-100} duration={500}>About us</Link></a></li>
        <li><a href=""><Link to='enroll' smooth={true} offset={-80} duration={500}>Enroll now</Link></a></li>
        <li><a href=""><Link to='location' smooth={true} offset={-60} duration={500}>Location</Link></a></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={taggleMenu}/>
    </div>
  )
}

export default Navbar
