import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCopied: false,
        };

        this.copyChangeState = this.copyChangeState.bind(this);
    }

    copyChangeState() {
        this.setState({ isCopied: true }, () => {
            setTimeout(() => this.setState({ isCopied: false }), 1500);
        });
    }

    render() {
        const { background, name } = this.props;
        const { isCopied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.copyChangeState}>
                <div style={{ background }} className='ColorBox'>
                    <div
                        style={{ background }}
                        className={`copy-overlay ${isCopied && 'show'}`}
                    />
                    <div className={`copy-msg ${isCopied && 'show'}`}>
                        <h1>copied!!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>MORE</span>
                </div>
            </CopyToClipboard>
        );
    }
}
export default ColorBox;
