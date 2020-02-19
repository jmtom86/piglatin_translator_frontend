import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api';
import { Container, Row, Col, Form, Button, Table, Navbar } from 'react-bootstrap';

function App() {
  const [translations, setTranslations] = useState([]);

  const translate = async function(event) {
    event.preventDefault();
    try {
      const response = await Api.translate({'words': event.target.elements.formWords.value});
      const translation = await response.json();
      document.getElementById("translator").reset();
      setTranslations([translation, ...translations]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Row id="header" className="justify-content-md-center">
          <Col md={6}>
            <h1>Pig Latin Translator</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form id="translator" xs={4} onSubmit={translate}>
              <Form.Group controlId="formWords">
                <Form.Label>Type in a sentence to translate to Pig Latin</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Button variant="primary" type="submit">Translate</Button>
            </Form>
          </Col>
        </Row>
        <Row id="translations_table" className="justify-content-md-center">
          <Col md={10}>
            <h3>Translations</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Before</th>
                  <th>After</th>
                </tr>
              </thead>
              <tbody>
                {translations.map((t,i) =>
                  <tr key={i}>
                    <td>{t.words}</td>
                    <td>{t.translated}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Navbar fixed="bottom" bg="light">
          <Navbar.Brand>
            <span>Made by: Jordan Tom   
              <a href="https://github.com/jmtom86/piglatin_translator_frontend" target="_blank">Frontend Github Repo</a>
              <a href="https://github.com/jmtom86/piglatin_translator" target="_blank">Backend Github Repo</a>
            </span>
          </Navbar.Brand>
        </Navbar>
      </Container>
    </React.Fragment>
  );
}

export default App;
