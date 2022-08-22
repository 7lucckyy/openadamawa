import React from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap';

const TableComponent = () => {
  return (
    <div>
        <Container className='py-4'>
            <Row>
                <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Year</th>
                        <th>Contractor</th>
                        <th>Budgeted Amount</th>
                        <th>Contrcated Amount</th>
                        <th>MDA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                       
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default TableComponent