
import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu'
import {Link} from "react-router-dom";
import Toggle from './toggle.js';
import ParallaxImage from '../parallaxImage.js';
import Footer from './footer.js';





class Homepage extends Component {

  render() {
    require('../styles/home_style.css');
    return (
      <div className="App">
      <div id="home_content">
         <div className="home_one">
            <nav>
            <Toggle />
            </nav>

            <Menu right>
               <Link id="home" className="menu-item" to="/">
               Home</Link>
               <Link id="home" className="menu-item" to="/lunchPage">
               Lunch</Link>
               <Link id="home" className="menu-item" to="/dinnerPage">
               Dinner</Link>
               <Link id="home" className="menu-item" to="/contactPage">
               Contact</Link>
            </Menu>
            <div id="intro">
               <h1>Galanga Thai Cuisine</h1>
               <p>Galanga Thai is the Thai restaurant in Tacoma
                  that brings together the amazing spices, herbs and
                  fresh ingredients of Southeast Asia into truly memorable meals.
                  Come see us downtown, just blocks from the Museum of Glass,
                  Tacoma Art Museum, UW Tacoma, Convention and Trade Center, hotels,
                  theatres and much more.
               </p>
               <div id="arrow">
                  <div className="arrow-down"></div>
               </div>
            </div>
         </div>
         <div className="home_two">
         <h2>Welcome to Galanga!</h2>
            <p>Galanga is the Tacoma restaurant that's open all day on weekdays,
               and for dinner on Saturdays. Think of us for your mid-day or late
               afternoon Phad Thai craving. Phone in a dinner order to pick up on
               the way home!
            </p>

            <ParallaxImage />

            <p id="bottom_text">Visit Galanga pre- or post-theatre, or while exploring downtown's
            blossoming cultural and commercial offerings.
            </p>
         </div>
         <div className="home_three">
         <h3>What people are saying:</h3>
            <p className="three_p">"Galanga's Swimming Rama is a must try. The spinach is fresh and
               the peanut sauce is out of this world."
            </p>
            <p className="small">-Tacoma Weekly Volcano</p>
            <br />
            <p className="three_p">2009 Editor's Pick award, Best of South Sound.</p>
            <p className="small">-South Sound Magazine</p>
            <br />
            <p className="three_p">"I never thought that I would have the best Thai food ever in Tacoma, WA.
              We had the most delicious dinner, even better than [famous Asian restaurant] in Seattle."</p>
            <p className="small">-Lisa H., Tacoma</p>
         </div>

         <Footer />
         </div>
      </div>

    );
  }
}


export default Homepage;
