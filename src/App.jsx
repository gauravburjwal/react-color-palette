import seedColors from './colors/seedColors';
import { generatePalette } from './utils/colorHelpers';

import Palette from './components/Palette';

function App() {
    console.log(generatePalette(seedColors[1]));
    return (
        <div className='App'>
            <Palette palette={generatePalette(seedColors[1])} />
        </div>
    );
}

export default App;
