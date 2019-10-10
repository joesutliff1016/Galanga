import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import ToggleLunch from './toggleLunch.js';
import LunchApps from '../admin/lunchApps.js';
import LunchSoups from '../admin/lunchSoups.js';
import LunchSalads from '../admin/lunchSalads.js';
import LunchNoodles from '../admin/lunchNoodles.js';
import LunchCurry from '../admin/lunchCurry.js';
import LunchWoks from '../admin/lunchWoks.js';
import LunchRice from '../admin/lunchRice.js';
import Desserts from '../admin/desserts.js';
import Drinks from '../admin/drinks.js';
import Footer from './footer.js';



class Lunchpage extends Component {
  render() {
    require('../styles/menu_style.css');
    return (

      <div className="App">
   <div id="menu_content">

      <header className="menu_one">

      <nav>
         <ToggleLunch />
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
         <LunchApps />
         <LunchSoups />
         <LunchSalads />
         <LunchNoodles />
         <LunchCurry />
         <LunchWoks />
         <LunchRice />
         <Desserts />
         <Drinks />
      </div>
      <Footer />
   </div>
</div>

    );
  }
}

export default Lunchpage;
