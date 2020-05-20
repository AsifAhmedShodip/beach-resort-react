import React from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import roomImage from '../images/room-3.jpeg'

function Room({rooms}) {
    const roomLink = '/rooms/' + rooms.slug
    return  (
        <Col  sm={12} md={6} lg={4} xl={4}>
            <Card >
                <Card.Img variant="top" src={rooms.images[0]} />
                <Card.ImgOverlay className='d-flex align-items-start'>
                    <div className='dollerInfo'>
                        ${rooms.price}
                    </div>
                    <Link to={roomLink}>
                        <button className='room-features-button'>Features</button>
                    </Link>
                </Card.ImgOverlay>
                <Card.Text className='room-info'>
                    {rooms.name}
                    </Card.Text>
            </Card>
        </Col>
    )
}

export default Room
