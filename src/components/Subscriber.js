import React, { Component } from 'react'
 class SubsCriber extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         quote: 'Thanks For Visiting our site today',
         subscription: 0
      }
    }
    checkSubSCription(){
        this.setState(previosly=>({
            subscription: previosly.subscription+1,
            quote: 'You successfully Subscribed'
        }),()=>console.log(this.state.subscription))
        if(this.state.subscription>1 && this.state.subscription%2==0){
            this.setState(previosly=>({
                quote: 'Ops you just unSubscribed'
            }),()=>console.log(this.state.subscription))
        }
        else if(this.state.subscription>0 && this.state.subscription%2!=0){
          this.setState(previosly=>({
            quote: 'You successfully Subscribed'
          }))
        }
        else if(this.state.subscription==1){
            this.setState(previosly=>({
                quote: 'You successfully Subscribed'
              }))
        }
    }
  render() {
    return (
      <div>
        <p>{this.state.quote}--{this.state.subscription}</p>
        <button onClick={()=>this.checkSubSCription()}>Subscribe </button>
      </div>
    )
  }
}

export default SubsCriber