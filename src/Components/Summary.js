import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

const Summary = () => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                   
                </Col>
                <Col>
                    <Col>
                        <div className='text-center'>
                            <h5>Summary</h5>
                            <hr></hr>
                        </div>
                    </Col>
                    <Col>
                        <div className='border border-1'>
                        <Row>
                            <Col>
                                <div className='py-3 mt-2 mb-2 p-4'>
                                <i class="fa fa-4x fa-cog" aria-hidden="true"></i><span className='ml-2'>N</span>
                                </div>
                                <p>Hell</p>
                            </Col>
                            <Col>
                                <div className='py-3 mt-2 mb-2 p-4'>
                                    <i class="fa fa-4x fa-briefcase" aria-hidden="true"></i><span className='ml-2'>N</span>
                                </div>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <div className='py-3 mt-2 mb-2 p-4'>
                                    <i class="fa fa-4x fa-briefcase" aria-hidden="true"></i><span className='ml-2'>N</span>
                                </div>
                            </Col>
                            <Col>
                                <div className='py-3 mt-2 mb-2 p-4'>
                                    <i class="fa fa-4x fa-briefcase" aria-hidden="true"></i><span className='ml-2'>N</span>
                                </div>
                            </Col>
                            
                        </Row>
                         </div>
                    
                    </Col>
                </Col>
            </Row>
           
        </Container> 
    </>
  )
}

export default Summary