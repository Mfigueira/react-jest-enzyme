// import Counter from './Counter';
import { Container, Row, Col } from 'react-bootstrap';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

const App = () => {
  return (
    <Container data-test="component-app">
      <Row>
        <Col>
          <h1>Jotto</h1>

          {/* <Counter /> */}
          <Congrats success={true} />
          <GuessedWords
            guessedWords={[{ guessedWord: 'test', letterMatchCount: 4 }]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
