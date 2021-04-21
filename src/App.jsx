import Palette from './components/Palette';
import seedColors from './colors/seedColors';

function App() {
    return (
        <div className='App'>
            <Palette {...seedColors[7]} />
        </div>
    );
}

export default App;
