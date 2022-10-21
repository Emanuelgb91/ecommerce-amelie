import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

const ItemListContainer = () => {
  return (
    <div className='Products'>
        <Container fluid>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="producto1.png" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Agregar</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="producto2.png" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Agregar</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="producto3.png" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Agregar</Button>
            </Card.Body>
            </Card>
            </Col>
         </Row>
    </Container>
    </div>
  )
}

export default ItemListContainer