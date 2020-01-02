import React from 'react'
import { connect } from 'react-redux'
import Style from './App.module.scss'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  
  constructor(){
    super(...arguments)
    this.state = {}
  }
  
  componentDidUpdate(prevProps){
    Object.keys(prevProps).forEach(key => {
      if(prevProps[key] !== this.props[key]){
        let oldValue = prevProps[key]
        let value = this.props[key]
        if(typeof this[`on${key[0].toUpperCase()}${key.slice(1)}Changed`] === 'function'){
          this[`on${key[0].toUpperCase()}${key.slice(1)}Changed`](oldValue, value)
        }
      }
    })
  }
  
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
