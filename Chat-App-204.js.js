import React, { Component } from 'react';
import './App.css';

//////////// Chat Application ////////////////////////////////////
class App extends Component{
  state = {
           txtArea1: "",
           txtArea2: ""
          };

  sendMsg1 = () => {
    const txtArea1 = this.state.txtArea1
    this.setState({txtArea2: txtArea1}, () => {console.log(this.txtArea2)})
    console.log(this.state)
  }

  sendMsg2 = () => {
    const txtArea2 = this.state.txtArea2
    this.setState({txtArea1: txtArea2}, () => {console.log(this.txtArea1)})
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <textarea name="txtArea1" rows="6" cols="20" value={this.state.txtArea1} onChange={ (e) => { this.setState( {txtArea1: e.target.value} ) } }
        ></textarea>
        <textarea name="txtArea2" rows="6" cols="20" value={this.state.txtArea2} onChange={ (e) => { this.setState( {txtArea2: e.target.value} ) } }>
        </textarea>
        <br/>
        <button onClick={this.sendMsg1}>Send Message1</button>
        <button onClick={this.sendMsg2}>Send Message2</button>
      </div>
    )
  }
}

export default App;