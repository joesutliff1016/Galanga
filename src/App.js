import React, { Component } from 'react';
import Homepage from '../src/components/pages/homePage.js';
import Lunchpage from '../src/components/pages/lunchPage';
import Dinnerpage from '../src/components/pages/dinnerPage.js';
import Contactpage from '../src/components/pages/contactPage.js';
import AdminLunch from '../src/components/admin/adminLunch.js';
import AdminDinner from '../src/components/admin/adminDinner.js';



import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Lunchpage' component={Lunchpage} />
          <Route exact path='/Dinnerpage' component={Dinnerpage} />
          <Route exact path='/Contactpage' component={Contactpage} />
          <Route exact path='/AdminLunch' component={AdminLunch} />
          <Route exact path='/AdminDinner' component={AdminDinner} />
        </Switch>
      </HashRouter>
      </div>
    );
  }
}
export default App;
