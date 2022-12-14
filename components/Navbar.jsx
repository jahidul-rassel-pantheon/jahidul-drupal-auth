import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
      <div className="container-fluid">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <strong>Album</strong>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link active" aria-current="page" >Home</a>
              </Link>  
            </li>


            <li className="nav-item dropdown">
              <Link href="#" passHref>
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SimpleAuth[OAuth2]
                </a>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/auth/simple_auth/TokenRequest" passHref><a className="dropdown-item" >Token Request</a></Link></li>
                <li><Link href="/auth/simple_auth/Login" passHref><a className="dropdown-item" >User Login</a></Link></li>
                <li><Link href="/auth/simple_auth/OAuthUserDebug" passHref><a className="dropdown-item" >User Debug</a></Link></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <Link href="#" passHref>
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  JWT Auth
                </a>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/auth/jwt_auth/TokenRequest" passHref><a className="dropdown-item" >Token Request</a></Link></li>
                <li><Link href="/auth/jwt_auth/Login" passHref><a className="dropdown-item" >User Login</a></Link></li>
              </ul>
            </li>




            <li className="nav-item dropdown">
              <Link href="#" passHref>
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Basic Auth
                </a>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/auth/basic_auth/UserDetails" passHref><a className="dropdown-item" >User Details</a></Link></li>
              </ul>
            </li>


            
            <li className="nav-item">
              <Link href="/confidential-pages/my_account" passHref>
                <a className="nav-link" >Confidential</a>
              </Link> 
            </li>
          </ul>
          <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  )
}