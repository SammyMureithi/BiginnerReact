import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    LogInStatus(){
        this.setState({
            isLoggedIn: true
        })

    }
    LogOutStatus(){
        this.setState({
            isLoggedIn: false
        })
    }
  render() {
    if(this.state.isLoggedIn==true){
        return (
            <div>
             <div>Welcome Sammy</div>
             <button onClick={()=>this.LogOutStatus()}>Log Out</button>
            </div>
          )
    }
    else{
        return (
            <div>
             <div>Welcome Guest</div>
             <button onClick={()=>this.LogInStatus()}>Log In</button>
            </div>
          )  
    }
    return (
      <div>
       <div>Welcome Sammy</div>
       <div>Welcome Guest</div>
      </div>
    )
  }
}

export default UserGreeting