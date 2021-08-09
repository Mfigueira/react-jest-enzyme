// import Counter from './Counter';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getSecretWord } from '../../util/http';
import Congrats from '../Congrats';
import GuessedWords from '../GuessedWords';
import Input from '../Input';

const App = () => {
  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <Container data-test="component-app">
      <Row>
        <Col>
          <h1>Jotto</h1>

          {/* <Counter /> */}
          <Congrats success={false} />
          <Input success={false} secretWord="party" />
          <GuessedWords
            guessedWords={[{ guessedWord: 'test', letterMatchCount: 4 }]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
