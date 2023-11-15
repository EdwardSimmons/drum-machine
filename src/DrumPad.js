import { Component } from 'react';
import './App.css';


class DrumPad extends Component {
    render() {
        return (
            <div id={this.props.id} className="drum-pad-container">
                <div className="drum-pad">
                    {this.props.id}
                </div>
            </div>
        );
    }
}

export default DrumPad;
