import React, { Component } from 'react'

 class ClassClicked extends Component {
    clickHandler(){
        console.log("Am clicked Succesfully")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Clicked Class</button>
      </div>
    )
  }
}

export default ClassClicked