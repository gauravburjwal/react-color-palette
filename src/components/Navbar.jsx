import { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            format: 'hex',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ format: evt.target.value });
        this.props.handleChange(evt.target.value);
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='/'>React Color Palette</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value='hex'>Hex</MenuItem>
                        <MenuItem value='rgb'>RGB</MenuItem>
                        <MenuItem value='rgba'>RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;
