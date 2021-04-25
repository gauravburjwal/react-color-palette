import { withStyles } from '@material-ui/styles';

import styles from '../styles/MiniPaletteStyles';

const MiniPalette = (props) => {
    const { classes, emoji, paletteName, colors, handleClick } = props;
    const miniColorPalette = colors.map((color) => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        ></div>
    ));
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>{miniColorPalette}</div>
            <div className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </div>
        </div>
    );
};

export default withStyles(styles)(MiniPalette);
