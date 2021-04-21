import { Component } from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map((color) => (
            <ColorBox
                key={color.name}
                background={color.color}
                name={color.name}
            />
        ));
        return (
            <div className='Palette'>
                {/* TODO: Navbar */}
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* TODO: Footer */}
            </div>
        );
    }
}

export default Palette;
