import { Component } from 'react';
import Display from './Display'
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="app">
        <Display />

        <body>
          <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        </body>
      </div>
    );
  }
}

export default App;
