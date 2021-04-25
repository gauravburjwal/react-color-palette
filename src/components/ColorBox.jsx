import { Component } from 'react';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { withStyles } from '@material-ui/styles';

import styles from '../styles/ColorBoxStyles';

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
        const {
            background,
            name,
            moreUrl,
            showingFullPalette,
            classes,
        } = this.props;
        const { isCopied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.copyChangeState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div
                        style={{ background }}
                        className={`${classes.copyOverlay} ${
                            isCopied && classes.showOverlay
                        }`}
                    />
                    <div
                        className={`${classes.copyMessage} ${
                            isCopied && classes.showMessage
                        }`}
                    >
                        <h1>copied!!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link
                            to={moreUrl}
                            onClick={(evt) => evt.stopPropagation()}
                        >
                            <span className={classes.seeMore}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}
export default withStyles(styles)(ColorBox);
