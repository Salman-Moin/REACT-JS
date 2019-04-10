import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: "React",
    url: "https://react.org",
    author: "Jordon Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan, Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {list.map(function(item) {
          return <div>{item.title}
                      {item.url}
                      {item.author}
                      {item.num_comments}
                      {item.points}
                      {item.objectID}
                 </div>  
        })} 
      </div>
    );
  }
}

export default App;
