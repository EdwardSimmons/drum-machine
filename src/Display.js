import { Component } from 'react';
import DrumPad from './DrumPad';
import './App.css';


class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drumPads: [
                "Q", "W", "E", "A", "S", "D", "Z", "X", "C"
            ]
        }
    }

    render() {
        return (
            <div id="display" className="display-container">
                {this.state.drumPads.map(id => {
                    return <DrumPad id={id} />
                })}
            </div>
        );
    }
}

export default Display;
