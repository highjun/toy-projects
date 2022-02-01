import React from 'react'
import { Form, Button, Container, Col, Row, ListGroup } from 'react-bootstrap'
import { Times} from 'react-icons/fa'

const style = {
    h1: { textAlign: 'center', marginTop: '2rem' },
    list_item: {
        fontSize: '1.2rem',
        alignSelf: 'center',
    }
};

const App = () => {
    return (
        <Container>
            <h1 style={style.h1}>TODO List</h1>
            <Form>
                <Row>
                    <Col className='align-items-stretch'>
                        <Form.Control placeholder="Enter TODOs" />
                    </Col>
                    <Col xs='auto'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            <hr/>
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col style={style.list_item}>Cras justo odio</Col>
                        <Col xs ='auto'> 
                            <Button variant="outline-light">
                                ✔️
                            </Button>
                        </Col>
                        <Col xs ='auto'> 
                            <Button variant="outline-light">
                                ❌
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default App;