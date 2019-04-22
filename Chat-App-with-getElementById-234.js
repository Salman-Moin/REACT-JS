import React, { Component } from 'react';
import './App.css';

//////////// Chat Application ////////////////////////////////////
class App extends Component{
  state = {
           txtArea1: "",
           txtArea2: ""
          };

  sendMsg1 = () => {
    const txtArea1 = document.getElementById("txtArea1").value
    this.setState({
      txtArea1: txtArea1,
      txtArea2: txtArea1
    })
  }

  sendMsg2 = () => {
    const txtArea2 = document.getElementById("txtArea2").value
    this.setState({
      txtArea2: txtArea2,
      txtArea1: txtArea2
    })
  }

  render(){
    console.log(this.state) 
    return(
      <div>
        <textarea id="txtArea1" rows="6" cols="20" value={this.state.txtArea1} onChange={ (e) => { this.setState( {txtArea1: e.target.value} ) } }></textarea>
        <textarea id="txtArea2" rows="6" cols="20" value={this.state.txtArea2} onChange={ (e) => { this.setState( {txtArea2: e.target.value} ) } }></textarea>
        <br/>
        <button onClick={this.sendMsg1}>Send Message User1</button>
        <button onClick={this.sendMsg2}>Send Message User2</button>
     </div>
    )
  }
}
export default App;