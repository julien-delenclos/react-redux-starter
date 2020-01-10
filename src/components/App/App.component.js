import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LeftResizable, Fill, ViewPort, Layer, Top } from 'react-spaces'
import HeaderComponent from '../Header/Header.component'
import * as Fa from 'react-icons/fa'
import PanelComponent from '../Panel/Panel.component'
import Style from './App.module.scss'

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
          <HeaderComponent.Menu>            
            <HeaderComponent.Menu.Select items={['Option 1', 'Option 2']}/>
            <HeaderComponent.Menu.Select items={['Option 1', 'Option 2']}/>
            <HeaderComponent.Menu.Popover icon={Fa.FaInfo} title='Info'>
              <div>
                Description de l&lsquo;application
              </div>
            </HeaderComponent.Menu.Popover>
          </HeaderComponent.Menu>          
        </HeaderComponent>
        <Fill>
          <Layer zIndex={0}>
            <Fill className={Style.Background}>
              Background
            </Fill>
          </Layer>
          <Layer zIndex={1000}>
            <LeftResizable size='25%'>
              <Top size='50%'>
                <PanelComponent canHide={true}>
                  <PanelComponent.Tab icon={Fa.FaDiceOne}>
                    Tab 1
                  </PanelComponent.Tab>
                  <PanelComponent.Tab icon={Fa.FaDiceTwo}>
                    Tab 2
                  </PanelComponent.Tab>
                  <PanelComponent.Tab icon={Fa.FaDiceThree}>
                    Tab 3
                  </PanelComponent.Tab>
                </PanelComponent>
              </Top>
              <Fill>
                <PanelComponent canHide={false} grey={true}>
                  <PanelComponent.Tab icon={Fa.FaDiceOne}>
                    Tab 1
                  </PanelComponent.Tab>
                  <PanelComponent.Tab icon={Fa.FaDiceTwo}>
                    Tab 2
                  </PanelComponent.Tab>
                  <PanelComponent.Tab icon={Fa.FaDiceThree}>
                    Tab 3
                  </PanelComponent.Tab>
                </PanelComponent>
              </Fill>              
            </LeftResizable>
            <Fill>
              <PanelComponent canHide={false} grey={true}>
                <PanelComponent.Tab>
                  Fill
                </PanelComponent.Tab>
              </PanelComponent>
            </Fill>
          </Layer>
        </Fill>
      </ViewPort>
    )
  }
}

export default connect()(App)
