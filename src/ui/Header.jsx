import { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logomark.svg'
// import SearchOrder from '../features/order/SearchOrder'
// import Username from '../features/user/Username'

export class Header extends Component {
  render() {
    return (
      <header className=' flex items-center  uppercase px-4  pt-12 sm:px-8 sm:py-8'>
        
        <img src={logo} alt="Logo" />
        <Link className='hidden sm:block tracking-widest' to="/">Untitled UI</Link>

        {/* <SearchOrder />

        <Username /> */}

      </header>
    )
  }
}

export default Header