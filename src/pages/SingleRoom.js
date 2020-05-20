import React,{useContext,useState} from 'react'
import { useParams } from "react-router-dom";
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { RoomContext } from '../Context'
import Hero from '../components/Hero'
import StyledHero from '../components/StyledHero'
import {Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


function SingleRoom() {
    const props = useContext(RoomContext)
    let params = useParams()
    let slugInitial = params.slug
    const [slug,setSlug] =useState(slugInitial)
    const room = props.getRoom(slug)

   if(!room){
       return(
           <div>
               No Such Room
           </div>
       )
   }
   
    const {
        name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images
    } = room;

    const [main, ...defaultImages] = images;

    const imagesHtml = defaultImages.map((item, index) => {
        return (
            <Col sm={12} md={6} lg={4} xl={4} key={index}>
                <Card>
                    <Card.Img variant="top" src={item} alt={name}/>
                </Card>
            </Col>
        )
    }
    )

    return(
        <>
            <StyledHero img = {main}>
                <Banner title={name+' Room'} buttonText={'Back to Room'}></Banner>
            </StyledHero>

            <Container>

                <Container fluid className='single-room-images'>
                    <Row>
                        {imagesHtml}
                    </Row>
                </Container>

                <Container fluid>
                    <Row>
                        <Col sm={12} md={8} lg={8} xl={8}>
                            <article className="desc">
                                <h3>Details</h3>
                                <p>{description}</p>
                            </article>
                        </Col>
                        <Col sm={12} md={4} lg={4} xl={4}>
                            <article className="info">
                                <h3>Info</h3>
                                <h6>Price : ${price}</h6>
                                <h6>Size : {size} SQFT</h6>
                                <h6>
                                    Max capacity :
                                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                                </h6>
                                <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
                                <h6>{breakfast && "Free Breakfast Included"}</h6>
                            </article>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='room-extras'>
                    <h6>Extras </h6>
                    <Row>
                        {extras.map((item, index) => (
                            <Col sm={12} md={6} lg={4} xl={4} key={index}>- {item}</Col>
                        ))}
                    </Row>
                </Container>
                
            </Container>
        </>
    )
}

export default SingleRoom
