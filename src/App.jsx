import Palette from './components/Palette';
import seedColors from './colors/seedColors';

function App() {
    return (
        <div className='App'>
            <Palette {...seedColors[1]} />
        </div>
    );
}

export default App;
