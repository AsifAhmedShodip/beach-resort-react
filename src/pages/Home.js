import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'



function Home() {
    return (
        <>
            <Hero page={'hero'}></Hero>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>
        </>
    )
}

export default Home
