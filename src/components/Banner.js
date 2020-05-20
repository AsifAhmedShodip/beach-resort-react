import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Link} from 'react-router-dom'
function Banner({title,subtitle,buttonText}) {
    return (
        <Jumbotron className='jumbotron '>
            <h1>{title}</h1>
            <div className='line'></div>
            <p text-transform='capitalize'>{subtitle}</p>
            <Link to ='/rooms'>
                <button className='button1'>{buttonText} </button>
            </Link>
        </Jumbotron>
    )
}

export default Banner