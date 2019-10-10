
import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import ToggleDinner from './toggleDinner.js';
import DinnerApps from '../admin/dinnerApps.js';
import DinnerSoups from '../admin/dinnerSoups.js';
import DinnerSalads from '../admin/dinnerSalads.js';
import DinnerNoodles from '../admin/dinnerNoodles.js';
import DinnerCurry from '../admin/dinnerCurry.js';
import DinnerEntrees from '../admin/dinnerEntrees.js';
import DinnerRice from '../admin/dinnerRice.js';
import Desserts from '../admin/desserts.js';
import Drinks from '../admin/drinks.js';
import Footer from './footer.js';




class Dinnerpage extends Component {
  render() {
    require('../styles/menu_style.css');
    return (

      <div className="App">

        <div id="menu_content">
        <header className="dinner_one">
        <nav>
           <ToggleDinner />
        </nav>
           <Menu right>
              <Link id="home" className="menu-item" to="/">
              Home</Link>
              <Link id="home" className="menu-item" to="./lunchPage">
              Lunch Menu</Link>
              <Link id="home" className="menu-item" to="./dinnerPage">
              Dinner Menu</Link>
              <Link id="home" className="menu-item" to="./contactPage">
              Contact</Link>
           </Menu>
           <div id="menu-intro">
              <h1>Galanga Thai Cuisine</h1>
              <p>The best tastes of Thailand without traveling to Bangkok.</p>
           </div>
        </header>
           <div className="menu_two">
           <DinnerApps />
           <DinnerSoups />
           <DinnerSalads />
           <DinnerNoodles />
           <DinnerCurry />
           <DinnerEntrees />
           <DinnerRice />
           <Desserts />
           <Drinks />
           </div>
           <Footer />
        </div>
     </div>



    );
  }
}




export default Dinnerpage;
