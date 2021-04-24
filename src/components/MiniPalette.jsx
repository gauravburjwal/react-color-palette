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
    colorPalette: {
        backgroundColor: 'grey',
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
        fontSize: '1',
    },
};

const MiniPalette = (props) => {
    const { classes, emoji, paletteName } = props;
    return (
        <div className={classes.root}>
            <div className={classes.colorPalette}></div>
            <div className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </div>
        </div>
    );
};

export default withStyles(styles)(MiniPalette);
