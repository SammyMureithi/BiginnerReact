import React from "react";
import { Component } from "react";



class Message extends Component{

    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }
    }
    changeMesssage(){
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render(){

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() =>this.changeMesssage()}>Subscribe</button>

            </div>
        )
    }

}

export default Message