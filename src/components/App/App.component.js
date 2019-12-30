import React from 'react'
import { connect } from 'react-redux'
import Style from './App.module.scss'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render(){
    return (
      <div className={Style.App + ' App'}>
        <Container fluid={true} className={Style.Container}>
          <Row className={Style.Row}>
            <Col md={2} className={Style.Col}>
              
            </Col>
            <Col md={9} className={Style.Col}>
              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect()(App)
