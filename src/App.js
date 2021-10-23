import React, {Component} from 'react';
import './App.css'

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
        <h1 className='f2'>Chatify</h1>
      </div>
    );
  };

};

export default App;