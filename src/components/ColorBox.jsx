import React, { Component } from 'react';
import '../styles/ColorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div
                style={{ background: this.props.background }}
                className='ColorBox'
            >
                <span> {this.props.name}</span>
                <span> {this.props.background}</span>
            </div>
        );
    }
}
export default ColorBox;
