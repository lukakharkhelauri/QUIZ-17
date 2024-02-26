import { useState } from 'react'
import React from 'react'
import classes from '../modules/index.module.scss'
import Logo from '../images/logo.svg'

function App() {

  return (
    <>
      <header className={classes['header']}>
        <div className={classes['logo']}><img src={Logo}></img></div>
        <nav className={classes['nav']}>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#resources">Resources</a></li>
            </ul>
        </nav>
        <div className={classes['authorication']}>
            <a href='#login'>Login</a>
            <a href='#signup'>Sign Up</a>
        </div>
      </header>
    </>
  )
}

export default App