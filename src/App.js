import React, {Component} from 'react';
import RoomList from './components/room-list/room-list';
import Scroll from './components/scroll/scroll';
import {pulse} from "react-hover-css";
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log('running!')
  }

  render() {
    return (
      <div className='tc'>
        <h1 className='f2 title'>Chatify</h1>
        <Scroll>
          <RoomList/>
        </Scroll>
      </div>
    );
  };

};

export default App;