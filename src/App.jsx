import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import seedColors from './colors/seedColors';
import { generatePalette } from './utils/colorHelpers';

import Palette from './components/Palette';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => <h1>Hello from Home Page</h1>}
                />
                <Route
                    exact
                    path='/palette/:id'
                    render={() => <h1>Individual Palette</h1>}
                />
                <div>
                    <Palette palette={generatePalette(seedColors[7])} />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
