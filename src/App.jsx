import Palette from './components/Palette';
import seedColors from './colors/seedColors';
import { generatePalette } from './utils/colorHelpers';

function App() {
    console.log(generatePalette(seedColors[1]));
    return (
        <div className='App'>
            <Palette {...seedColors[1]} />
        </div>
    );
}

export default App;
