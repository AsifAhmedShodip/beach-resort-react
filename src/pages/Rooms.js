import React,{useContext} from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import RoomsFilter from '../components/RoomsFilter'
import { RoomContext } from '../Context'
import Loading from '../components/Loading'
import Room from '../components/Room'

import {Container} from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

function Rooms({props}) {
    const state = useContext(RoomContext)
    const allRooms = state.rooms
    const featuredRooms = state.featuredRooms
    const sortedRooms = state.sortedRooms
    const loading = state.loading
    let bool = true

    const rooms = sortedRooms.map(featuredRoom => {
        return (
            <Room key={featuredRoom.id} rooms={featuredRoom}></Room>
        )
    })

    if(rooms.length === 0){
        bool = false
    }

    return (
        <>
            <Hero page={'room-hero'}></Hero>
            <Container fluid>
                <Title title='Search Rooms'></Title>
                <RoomsFilter></RoomsFilter>
                <Container style={{ marginTop: 20, marginBottom: 100 }}>
                    {loading ?
                        <Loading /> :
                        <Container fluid>
                            {bool?
                                <Row>
                                    {rooms}
                                </Row>
                                :
                                <Container>
                                    No Matches
                                </Container>
                            }
                        </Container>
                    }
                </Container>
            </Container>
        </>

    )
}

export default Rooms
