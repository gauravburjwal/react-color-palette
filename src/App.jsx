import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import seedColors from './colors/seedColors';
import { generatePalette } from './utils/colorHelpers';

import Palette from './components/Palette';
import { Component } from 'react';

class App extends Component {
    findPalette(id) {
        return seedColors.find((palette) => palette.id === id);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => <h1>Hello from Home Page</h1>}
                    />
                    {/* FIXME: Fix 404 Routes for invalid IDs */}
                    <Route
                        exact
                        path='/palette/:id'
                        render={(routeProps) => (
                            <Palette
                                palette={generatePalette(
                                    this.findPalette(routeProps.match.params.id)
                                )}
                            />
                        )}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;
