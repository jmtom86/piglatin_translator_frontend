import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  const [translations, setTranslations] = useState([]);

  const translate = async function(event) {
    event.preventDefault();
    try {
      const response = await Api.translate({'words': event.target.elements.formWords.value});
      const translation = await response.json();
      setTranslations([translation, ...translations]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Form xs={4} onSubmit={translate}>
          <Form.Group controlId="formWords">
            <Form.Label>Type in Sentence to Translate to PigLatin</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Button variant="primary" type="submit">Translate</Button>
        </Form>
        <h3>Translations</h3>
        {translations.map((t,i) =>
          <p key={i}>{t.translated}</p>
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
