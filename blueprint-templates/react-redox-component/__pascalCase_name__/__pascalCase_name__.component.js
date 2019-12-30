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

  render() {
    return (
      <div className={Style.Root}>

      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.{{pascalCase name}} })
const mapDispatchToProps = dispatch => bindActionCreators({ ...{{pascalCase name}}Actions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}})
