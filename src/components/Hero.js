import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function Hero({page}) {
    if(page === 'hero'){
        return(
            <div className={page}>
                <Banner title='Luxurious Room'
                    subtitle='delux Rooms Starts at $50'
                    buttonText='Our Rooms'>
                </Banner>
            </div>
        )
    }
    return (
        <div className={page}>
            <Banner title='Our Rooms'
                buttonText='Return Home'>
            </Banner>
        </div>
    )
}

export default Hero
