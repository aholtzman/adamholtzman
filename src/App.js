import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Design from './Routes/Design'
import InBlue from './Routes/InBlue'
import Undone from './Routes/Undone'
import Photographs from './Routes/Photographs'
import Artworks from './Routes/Artworks'
import Curation from './Routes/Curation'
import StillLife from './Routes/StillLife'
import BlackMirror from './Routes/BlackMirror'
import Absence from './Routes/Absence'
import Deconstruction from './Routes/Deconstruction'
import Ink from './Routes/Ink'
import Landscapes from './Routes/Landscapes'
import Layers from './Routes/Layers'
import Mirrors from './Routes/Mirrors'
import RIPB from './Routes/RIPB'
import Self from './Routes/Self'
import Pages from './Routes/Pages'
import Poles from './Routes/Poles'
import Surfaces from './Routes/Surfaces'
import Whitewash from './Routes/Whitewash'
import Shadows from './Routes/Shadows'

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/design' component={Design} />
            <Route path='/inBlue' component={InBlue} />
            <Route path='/Undone' component={Undone} />
            <Route path='/Photographs' component={Photographs} />
            <Route path='/Artworks' component={Artworks} />
            <Route path='/curation' component={Curation} />
            <Route path='/StillLife' component={StillLife} />
            <Route path='/BlackMirror' component={BlackMirror} />
            <Route path='/absence' component={Absence} />
            <Route path='/deconstruction' component={Deconstruction} />
            <Route path='/ink' component={Ink} />
            <Route path='/landscapes' component={Landscapes} />
            <Route path='/layers' component={Layers} />
            <Route path='/mirrors' component={Mirrors} />
            <Route path='/RIPB' component={RIPB} />
            <Route path='/self' component={Self} />
            <Route path='/pages' component={Pages} />
            <Route path='/poles' component={Poles} />
            <Route path='/surfaces' component={Surfaces} />
            <Route path='/whitewash' component={Whitewash} />
            <Route path='/shadows' component={Shadows} />
            <Route component={Home} />
          </Switch>
        </Router>
    );
  }
}

export default App;
