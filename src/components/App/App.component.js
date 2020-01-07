import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LeftResizable, Fill, ViewPort, Layer, Top } from 'react-spaces'
import HeaderComponent from '../Header/Header.component'
import * as Fa from 'react-icons/fa'
import PanelComponent from '../Panel/Panel.component'
import Style from './App.module.scss'
import MenuPopoverComponent from '../Menu/MenuPopover.component'
import MenuComponent from '../Menu/Menu.component'

class App extends React.Component{
  
  constructor(){
    super(...arguments)
    this.state = {
      title: 'PTV-React'
    }
  }
  
  render(){
    return (
      <ViewPort>
        <HeaderComponent title={this.state.title} icon={Fa.FaMap}>
          <MenuComponent>
            Menu
            <MenuPopoverComponent icon={Fa.FaInfo} title='Info'>
              <div>
                Description de l&lsquo;application
              </div>
            </MenuPopoverComponent>
          </MenuComponent>          
        </HeaderComponent>
        <Fill>
          <Layer zIndex={0}>
            <Fill className={Style.Background}>
              Background
            </Fill>
          </Layer>
          <Layer zIndex={1000}>
            <LeftResizable size='25%'>
              <Top size='25%'>
                <PanelComponent canHide={true}>
                  Left-Top
                </PanelComponent>
              </Top>
              <Fill>
                <PanelComponent canHide={true}>
                  Left-Bottom
                </PanelComponent>
              </Fill>              
            </LeftResizable>
            <Fill>
              <PanelComponent grey={true}>
                Fill
              </PanelComponent>
            </Fill>
          </Layer>
        </Fill>
      </ViewPort>
    )
  }
}

export default connect()(App)
