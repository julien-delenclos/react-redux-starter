import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as {{pascalCase name}}Actions from './{{pascalCase name}}.actions'
import Style from './{{pascalCase name}}.module.scss'

class {{pascalCase name}} extends React.Component{

  constructor(){
    super(...arguments)
    this.state = { }
  }
  
  componentDidUpdate(prevProps){
    Object.keys(prevProps).forEach(key => {
      if(prevProps[key] !== this.props[key]){
        if(typeof this[`on${key[0].toUpperCase()}${key.slice(1)}Changed`] === 'function'){
          this[`on${key[0].toUpperCase()}${key.slice(1)}Changed`](this.props[key])
        }
      }
    })
  }

  render() {
    return (
      <div className={Style.{{pascalCase name}} }>

      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.{{pascalCase name}} })
const mapDispatchToProps = dispatch => bindActionCreators({ ...{{pascalCase name}}Actions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}})
