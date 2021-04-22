import { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';

import '../styles/Palette.css';

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
                <Navbar level={level} changeLevel={this.changeLevel} />
                {/* TODO: Navbar */}
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* TODO: Footer */}
            </div>
        );
    }
}

export default Palette;
