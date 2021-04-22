import { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import '../styles/Palette.css';
import Slider from 'rc-slider';

class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel });
    }

    render() {
        const { palette } = this.props;
        const { level } = this.state;
        const colorBoxes = palette.colors[level].map((color) => (
            <ColorBox
                key={color.name}
                background={color.hex}
                name={color.name}
            />
        ));
        return (
            <div className='Palette'>
                <div className='slider'>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                {/* TODO: Navbar */}
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* TODO: Footer */}
            </div>
        );
    }
}

export default Palette;
