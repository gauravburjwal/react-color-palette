import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import seedColors from './colors/seedColors';
import { generatePalette } from './utils/colorHelpers';

import Palette from './components/Palette';
import { Component } from 'react';
import PaletteList from './components/PaletteList';

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
                        render={(routeProps) => (
                            <PaletteList
                                palettes={seedColors}
                                {...routeProps}
                            />
                        )}
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
                    <Route
                        exact
                        path='/palette/:paletteId/:colorId'
                        render={() => <h1>Single Color Page</h1>}
                    ></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
