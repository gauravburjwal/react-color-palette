import { Component } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'rc-slider';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';

import { withStyles } from '@material-ui/styles';

import styles from '../styles/NavbarStyles';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            format: 'hex',
            open: false,
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnakbar = this.closeSnakbar.bind(this);
    }

    handleFormatChange(evt) {
        this.setState({ format: evt.target.value, open: true });
        this.props.handleChange(evt.target.value);
    }

    closeSnakbar() {
        this.setState({
            open: false,
        });
    }

    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format, open } = this.state;
        return (
            <header className={classes.navbar}>
                <div className={classes.logo}>
                    <Link to='/'>React Color Palette</Link>
                </div>
                {showingAllColors && (
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                )}

                <div className={classes.selectContainer}>
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value='hex'>Hex</MenuItem>
                        <MenuItem value='rgb'>RGB</MenuItem>
                        <MenuItem value='rgba'>RGBA</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    onClose={this.closeSnakbar}
                    autoHideDuration={2500}
                    message={
                        <span>Format Changed to {format.toUpperCase()} </span>
                    }
                    action={[
                        <IconButton onClick={this.closeSnakbar} color='inherit'>
                            <CloseIcon fontSize='small' />
                        </IconButton>,
                    ]}
                />
            </header>
        );
    }
}

export default withStyles(styles)(Navbar);
