import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }

    clickHandler() {
        console.log('this', this);
        
        this.setState({
            message: 'Goodbye!'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind
