import { Component } from 'react';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import chroma from 'chroma-js';

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
        const { background, name, moreUrl, showLink } = this.props;
        const { isCopied } = this.state;

        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.7;

        return (
            <CopyToClipboard text={background} onCopy={this.copyChangeState}>
                <div style={{ background }} className='ColorBox'>
                    <div
                        style={{ background }}
                        className={`copy-overlay ${isCopied && 'show'}`}
                    />
                    <div className={`copy-msg ${isCopied && 'show'}`}>
                        <h1>copied!!</h1>
                        <p className={isLightColor && 'dark-text'}>
                            {background}
                        </p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className={isDarkColor && 'light-text'}>
                                {name}
                            </span>
                        </div>
                        <button
                            className={`copy-button ${
                                isLightColor && 'dark-text'
                            }`}
                        >
                            Copy
                        </button>
                    </div>
                    {showLink && (
                        <Link
                            to={moreUrl}
                            onClick={(evt) => evt.stopPropagation()}
                        >
                            <span
                                className={`see-more ${
                                    isLightColor && 'dark-text'
                                }`}
                            >
                                MORE
                            </span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}
export default ColorBox;
