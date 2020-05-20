import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'


import {RoomContext} from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

function FeaturedRooms() {
    const state = useContext(RoomContext)
    const allRooms = state.rooms
    const featuredRooms = state.featuredRooms
    const loading = state.loading

    const rooms = featuredRooms.map(featuredRoom => {
        return(
            <Room key={featuredRoom.id} rooms={featuredRoom}></Room>
        )
    })
    return (
        <Container style={{marginTop:20,marginBottom:100}}>
            <Title title='Featured Rooms' />
            {loading? 
                <Loading/>:
                <Container >
                    <Row>
                        {rooms}
                    </Row>
                </Container>
            }
        </Container>
    )
}

export default FeaturedRooms
