import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        email: '',
        comment:'',
        gender:'Male'
      }
    }
    UserNameChaged=(event)=>{
        this.setState({
            username: event.target.value
        })
        
    }
    InputEmailChanged=(event1)=>{
        this.setState({
            email: event1.target.value
        })
    }
    CommentChange=(event2)=>{
        this.setState({
            comment: event2.target.value
        })
    }
     onGenderSElectChange=(event3)=>{
         this.setState({
             gender: event3.target.value
         })

    }
  render() {
    return (
     <form>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.UserNameChaged}></input><br></br>
            <label>Email</label>
            <input type='Email' value={this.state.email} onChange={this.InputEmailChanged}></input>
            <h1>UserName:: {this.state.username}</h1>
            <h1>Email:: {this.state.email}</h1>
        </div>
        <div>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange={this.CommentChange}></textarea>
            <h2>Comment:: <br></br>{this.state.comment}</h2>
        </div>
        <div>
            <label>Select Gender</label>
            <select value={this.state.gender} onChange={this.onGenderSElectChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Hermaphrodite">Hermaphrodite</option>
            </select>
            <h2> Gender:::{this.state.gender}</h2>
        </div>
     </form>
    )
  }
}

export default Form