import React from 'react'
import { Link } from 'react-router-dom'
import  '../style.css'

const Nav = () => {
  return (
    <div className='nav__container'>
      <ul>
        <li><Link to= "/home" style={{textDecoration: 'none', color : 'blue'}} >HOME</Link> </li>
        <li> <Link to= "/student" style={{textDecoration: 'none', color : 'blue'} } >Student</Link></li>
       <li><Link to= "/contact" style={{textDecoration: 'none', color : 'blue'}} >Contact</Link> </li>
       </ul>
       {/* <Link to= "/home" >HOME</Link>
       <Link to= "/student" >Student</Link>
       <Link to= "/contact" >Contact</Link> */}
    </div>
  )
}

export default Nav