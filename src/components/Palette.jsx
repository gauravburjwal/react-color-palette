import { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';

import '../styles/Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 500,
            format: 'hex',
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel });
    }

    changeFormat(value) {
        this.setState({ format: value });
    }

    render() {
        const { palette } = this.props;
        const { level, format } = this.state;
        const colorBoxes = palette.colors[level].map((color) => (
            <ColorBox
                key={color.name}
                background={color[format]}
                name={color.name}
            />
        ));
        return (
            <div className='Palette'>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                />
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* TODO: Footer */}
            </div>
        );
    }
}

export default Palette;
