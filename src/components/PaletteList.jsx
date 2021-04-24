import { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                Palette List
                {palettes.map((color) => (
                    <div className='links' key={color.id}>
                        <Link to={`palette/${color.id}`} key={color.id}>
                            {color.paletteName}
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default PaletteList;
