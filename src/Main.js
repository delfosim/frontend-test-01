import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import WidgetsList from './WidgetsList';

const Main = () => <div>
  <Container>
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Título do gráfico:
        </Form.Label>
        <Col>
          <Form.Control type="name" placeholder="Título" id="title"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Adicionar valor:
        </Form.Label>
        <Col>
          <Form.Control type="number" placeholder="0" id="value"/>
        </Col>
      </Form.Group>

      <WidgetsList/>
    </Form>
  </Container>
</div>

export default Main;
