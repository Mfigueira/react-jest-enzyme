// import Counter from './Counter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getSecretWord } from '../../util/http';
import Congrats from '../Congrats';
import GuessedWords from '../GuessedWords';
import Input from '../Input';

const App = () => {
  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);

  const secretWord = 'party';

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <Container data-test="component-app">
      <Row>
        <Col>
          <h1>Jotto</h1>

          <Congrats success={success} />
          <Input />
          <GuessedWords guessedWords={guessedWords} />
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <Counter />
        </Col>
      </Row> */}
    </Container>
  );
};

export default App;
