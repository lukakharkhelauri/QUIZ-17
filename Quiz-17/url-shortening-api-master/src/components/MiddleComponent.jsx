import { useState } from 'react'
import React from 'react'
import classes from '../modules/Middle.module.scss'
import MainImage from '../images/Main.svg'

function MiddleComponent() {

    return (
      <>
        <div className={classes['container']}>
            <div className={classes['textContainer']}>
                <h1>More than just shorter links</h1>
                <p>Build your brands recognition and get detailed insights on how your links are performing</p>
                <button>Get Started</button>
            </div>
            <div className={classes['imageCOntainer']}>
                <img src={MainImage}></img>
            </div>
        </div>
      </>
    )
  }
  
  export default MiddleComponent