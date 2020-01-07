import React from 'react'
import { connect } from 'react-redux'
import Style from './Panel.module.scss'
import { Fill, Left, Top } from 'react-spaces'
import * as Fa from 'react-icons/fa'

class Panel extends React.Component{

  constructor(){
    super(...arguments)
    this.state = {
      hover: false,
      visible: true,
      initialWidth: 'calc(100% - 40px)'
    }
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <Fill className={Style.Panel + ' ' + (this.props.Grey ? Style.Grey : Style.White)} 
        style={{width: !this.state.visible ? '40px': this.state.initialWidth}}>
        <Left size={this.props.canHide ? '40px' : '0px'} className='text-center'>
          <Top size='40px' centerContent='vertical' 
            onMouseEnter={this.toggleHover} 
            onMouseLeave={this.toggleHover}
            onClick={this.toggleVisible}
            className={Style.Button + ' ' + (this.state.visible ? Style.Active : this.state.hover ? Style.Hover : '')}>
            <Fa.FaArrowLeft size='16px' className={Style.Icon + ' ' + (this.state.visible ? '' : Style.Hide)}/>
          </Top>
        </Left>
        {this.state.visible ? 
          <Fill className={Style.Content}>
            {this.props.children}
          </Fill>
          : ''}        
      </Fill>
    )
  }
}

export default connect()(Panel)
