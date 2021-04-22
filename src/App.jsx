import seedColors from './colors/seedColors';
import { generatePalette } from './utils/colorHelpers';

import Palette from './components/Palette';

function App() {
    return (
        <div className='App'>
            <Palette palette={generatePalette(seedColors[7])} />
        </div>
    );
}

export default App;
