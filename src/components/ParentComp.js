import React, { Component } from 'react'
import Memocomponent from './Memocomponent'
import PureComponent from './PureComponent'
import RegularComp from './RegularComp'

 class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Sammy'
        }
      }
      componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Sammy'
            })
        },2000)
      }
  render() {
    console.log('***********Parent component***************')
    return (
      <div>
        ParentComp
        <Memocomponent name={this.state.name}/>
        {/*<RegularComp name={this.state.name}></RegularComp>
        <PureComponent name={this.state.name}></PureComponent>*/}
        </div>
    )
  }
}

export default ParentComp