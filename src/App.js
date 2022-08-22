
import './App.css';
import './bootstrap.min.css';
import Header from './Components/Header';
import {Container, Col, Row} from 'react-bootstrap';
import Table from './Components/Table';
import Form from './Components/Form';
import Map from './Components/Map'
import Summary from './Components/Summary';





function App() {
  return (
    <>
    <Header/>
      <main className='py-3'>
        <Container>
        <Row >
          <Col>
              <Form />
          </Col>
          <Col>
              <Map />
          </Col>
          </Row>
            <Row>
              <Col >
                  <Summary/>
              </Col>
            </Row>
        </Container>
        <Container>
          <Table/>
        </Container>
       
      </main>
    </>
  );
}

export default App;
