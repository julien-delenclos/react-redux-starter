import React from 'react'
import { connect } from 'react-redux'
import Style from './MenuPopover.module.scss'
import { OverlayTrigger, Popover } from 'react-bootstrap'

class MenuPopover extends React.Component{

  constructor(){
    super(...arguments)
    this.state = { }
  }

  render() {
    return (
      <OverlayTrigger trigger='click' placement='bottom' overlay={
        <Popover>
          <Popover.Title as='h3'>{this.props.title}</Popover.Title>
          <Popover.Content>
            {this.props.children}
          </Popover.Content>
        </Popover>
      }>
        <this.props.icon size='12px' className={Style.Icon + ' mr-3 ml-3'} title={this.props.title}/>
      </OverlayTrigger>
    )
  }
}

export default connect()(MenuPopover)
