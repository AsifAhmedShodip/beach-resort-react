import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


import { RoomContext } from '../Context'


const getUnique = (items, value) => {
    let set1 = new Set(items.map(item => item[value]))
    return set1
};

function RoomsFilter() {
    const state = useContext(RoomContext)
    const {
        rooms,
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = state;

    let types = getUnique(rooms,'type')
    types = ['all',...types]

    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    let people = getUnique(rooms, 'capacity')
    people = [...people]
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));


    console.log(state)
    return (
        <Container style={{marginBottom:100}}>
            <Form>
                <Row>
                    <Col xs={6} sm={6} md={4} lg={3} xl={3}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Room Type</Form.Label>
                            <Form.Control as="select" value={type} name="type" onChange={handleChange}>
                                {types}
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={6}  sm={6} md={4} lg={3} xl={3}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Guests</Form.Label>
                            <Form.Control as="select" value={capacity} name="capacity" onChange={handleChange}>
                                {people}
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={6}  sm={6} md={4} lg={2} xl={2}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Room Price ${price}</Form.Label>
                            <Form.Control type="range" value={price} name="price" onChange={handleChange} min={minPrice} max={maxPrice}>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={6}  sm={6} md={6} lg={3} xl={3}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Room Size</Form.Label>
                            <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control type="number" value={minSize} name="minSize" onChange={handleChange}></Form.Control>
                                </Col>

                                <Col>
                                    <Form.Control type="number" value={maxSize} name="maxSize" onChange={handleChange}></Form.Control>
                                </Col>
                            </Form.Row>
                            </Form>
                        </Form.Group>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={1} xl={1}>
                        <Form.Check label="Breakfast" name="breakfast" checked={breakfast} onChange={handleChange}/>
                        <Form.Check label="Pets" name="pets" checked={pets} onChange={handleChange}/>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default RoomsFilter
