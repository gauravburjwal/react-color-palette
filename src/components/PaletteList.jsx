import { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                Palette List
                {palettes.map((palette) => (
                    <div className='links' key={palette.id}>
                        <Link to={`palette/${palette.id}`} key={palette.id}>
                            <MiniPalette {...palette} />
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default PaletteList;
