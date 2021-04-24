import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative',
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem',
    },
    miniColor: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px',
    },
};

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
