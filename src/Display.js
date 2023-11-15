import { Component } from 'react';
import DrumPad from './DrumPad';
import './App.css';


class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drumPads: [
                {
                    id: "Q",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
                    name: "heater-1",
                },
                {
                    id: "W",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
                    name: "heater-2",
                },
                {
                    id: "E",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
                    name: "heater-3",
                },
                {
                    id: "A",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
                    name: "heater-4",
                },
                {
                    id: "S",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                    name: "heater-6",
                },
                {
                    id: "D",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
                    name: "dcs-oh",
                },
                {
                    id: "Z",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
                    name: "kick-n-hat",
                },
                {
                    id: "X",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                    name: "kick",
                },
                {
                    id: "C",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
                    name: "hh",
                }
            ]
        }
    }

    render() {
        return (
            <div id="display" className="display-container">
                {this.state.drumPads.map((pad, index) => {
                    return <DrumPad id={pad.id} src={pad.src} name={pad.name} key={index} />
                })}
            </div>
        );
    }
}

export default Display;
