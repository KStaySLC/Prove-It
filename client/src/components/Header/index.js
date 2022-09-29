import React from 'react'

import '../../static/header.css'
import {Link} from 'react-router-dom'

function header() {
  return (
    <div className='headerDiv'>
        <ul>
            <Link to="/Home"><li className='headerLi'>Home</li></Link>
            <Link to="/Profile"><li className='headerLi'>Profile</li></Link>
            <Link to="/Bank"><li className='headerLi'>Bank</li></Link>
            <Link to="/Post"><li className='headerLi'>New Post</li></Link>
        </ul>
    </div>
  )
}

export default header