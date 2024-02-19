import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className='container-fluid'>
      <Link className='navbar-brand' to="/">{props.title}</Link>
      <button className='navbar-toggler' type='button' data-bs-toggler="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
s
        <div className='collapse navbar-collapse' id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link ' aria-current="page" to="/"> Home  </Link>
   
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/about"> {props.text} </Link>

             </li>
            
            {/* <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href="/" id="navbarDropdown" role='button' data-bs-toggle="dropdown" aria-expanded="false">Dropdown </a>
                <ul className='dropdown-menu' aria-labelledby="navbarDropdown">
                  <li><a className='dropdown-item' href="/">Action</a></li>
                  <li><a className='dropdown-item' href="/"> Another Action</a></li>
                  <li><hr className='dropdown-divider'/></li>
                  <li><a className='dropdown-item' href="/"> Something else here</a></li>
                </ul>

            </li> */}
            {/* <li className='nav-item'>
              <a className='nav-link disable' href="/" tabIndex="1" aria-expanded='true'> Disable </a>

            </li> */}

          </ul>
             {/* <form className='d-flex'>
               <input className='form-control me-2' type='search' placeholder='Search'aria-label='Search'/>
               <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form> */}

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"   onClick={props.toggleMode}   type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
        </div>
    </div>

  </nav>
        </div>
    )
}


Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title:'Set Title',
    text: 'About'
}