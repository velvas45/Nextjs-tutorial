import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';

function SingleUser({ people }) {
  const router = useRouter();
  const onBack = () => router.push('/');

  return (
    <Container fluid>
      <Button variant="primary" className={'mt-5'} onClick={onBack}>
        Go Back
      </Button>
      <Row className="justify-content-md-center py-3">
        <Col md={10}>
          <Card>
            <Card.Img variant="top" src={people.avatar} />
            <Card.Body>
              <Card.Title>
                {people.first_name} {people.last_name}
              </Card.Title>
              <Card.Text>{people.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleUser;
