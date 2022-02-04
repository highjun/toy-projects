import React, { useState } from 'react'
import { Form, Button, Container, Col, Row, ListGroup } from 'react-bootstrap'

const style = {
    h1: { textAlign: 'center', marginTop: '2rem' },
    list_item: {
        fontSize: '1.2rem',
        alignSelf: 'center',
    }
};

const App = () => {
    const [todoList, setTODOList] = useState(['TODO List Generation', 'second']);
    const [input, setInput] = useState('');
    const deleteTODO = (idx) => {
        let copy = [...todoList];
        copy.splice(idx, 1);
        setTODOList(copy);
    }
    const handleInput = (event)=>{
        // console.log(event);
        event.preventDefault();
        setInput('');
        addTODO();
    }
    const addTODO = () => {
        let copy = [...todoList];
        copy.push(input);
        setTODOList(copy);
    }
    return (
        <Container>
            <h1 style={style.h1}>TODO List</h1>
            <Form onSubmit={handleInput}>
                <Row>
                    <Col className='align-items-stretch'>
                        <Form.Control placeholder="Enter TODOs" value={input} onChange={({target:{value}}) => setInput(value)}/>
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
                {todoList.map((val,idx) => (
                    <ListGroup.Item key= {idx}>
                    <Row>
                        <Col style={style.list_item}>{val}</Col>
                        <Col xs ='auto'> 
                            <Button onClick={() => deleteTODO(idx)} variant="outline-light" >
                                ✔️
                            </Button>
                        </Col>
                        <Col xs ='auto'> 
                            <Button onClick={() => deleteTODO(idx)} variant="outline-light">
                                ❌
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                ))}
            </ListGroup>    
        </Container>
    );
}

export default App;