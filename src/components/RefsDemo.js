import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.fucus()
        console.log(this.inputRef)
    }
  render() {
    return (
      <div>
        <label>Focused Input</label>
        <input  type={'text'} ref={this.inputRef}></input>
      </div>
    )
  }
}

export default RefsDemo