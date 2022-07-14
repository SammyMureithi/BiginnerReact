import React, { Component } from 'react'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Samure'
      }
      console.log('LifeCycleA Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA ComponentDid Mount')
    }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        LifeCycleA
      </div>
    )
  }
}

export default LifeCycleA