import React, { Component } from 'react';

const User = (props) => {
  return(<div>Name: {props.children} | Age: {props.age}
  </div>)
}

class App extends Component {
  render() {
    return (
      <div className="App"><Users/></div>
    )
  }
}

class Users extends Component{
  state = {
    users: [
      {name: "John", age: 20},
      {name: "Jill", age: 30},
      {name: "Peter", age: 40}
    ],
    title: "Users List"
  };

  // makeMeYounger = () => {
  //   this.setState({
  //     users: [
  //       {name: "John", age: 10},
  //       {name: "Jill", age: 20},
  //       {name: "Peter", age: 30}
  //     ]    
  //   })
  // }

  makeMeYounger = () => {
    const newState = this.state.users.map((user) => {
      const tempUser = user;
      tempUser.age -= 10;
      return tempUser;
    });
    this.setState({
      newState
    });
  }
  
  changeTitle = () => {
    flag = true
    const newTitle = "Users List - New Title!"
    let flag
    if (flag = true) 
      this.setState({title: newTitle})
   // else this.setState({title:title})
    //this.state.title = this.state.newTitle
  }

  render(){
    return(<div>
      <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
      {/* <input type="text" name="title"></input> */}
      <button onClick={this.changeTitle}>Change Title</button>
      <br/>
      <h1>{this.state.title}</h1>
      {
        this.state.users.map((user) => {
          return <User age={user.age}>{user.name}</User>
        })
      }

      {/* <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
      <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
      <User age={this.state.users[2].age}>{this.state.users[2].name}</User> */}
    </div>)
  }

}

export default App;
