import React from 'react'
import { connect } from 'react-redux'
import Style from './Menu.module.scss'

class Menu extends React.Component{

  constructor(){
    super(...arguments)
    this.state = { }
  }

  render() {
    return (
      <div className={Style.Menu }>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(Menu)
