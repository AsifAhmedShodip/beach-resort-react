import React from 'react'
import Title from './Title'
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import {Container,Row,Col} from 'react-bootstrap'

const servicesList = [
    {
        icon:<FaCocktail></FaCocktail>,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enjoy Yourselves.'
    },
    {
        icon: <FaHiking></FaHiking>,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enjoy Yourselves.'
    },
    {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: 'Free Suttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enjoy Yourselves.'
    },
    {
        icon: <FaBeer></FaBeer>,
        title: 'Storngest Beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enjoy Yourselves.'
    }
]

function Services() {

    const items = servicesList.map((service, index) => {
        return (
            <Col key={index} xm={12} sm={6} md={6} lg={3} xl={3}>
                <div  className='container service'>
                    <div className='service-icon'>{service.icon}</div>
                    <h6 className='service-title'>{service.title}</h6>
                    <p className='service-info'>{service.info}</p>
                </div>
            </Col>
        )
    })

    return (
        <div>
            <Title title= 'Services'></Title>
            <Container>
                <Row>
                    {items}
                </Row>
            </Container>
        </div>
    )
}

export default Services
