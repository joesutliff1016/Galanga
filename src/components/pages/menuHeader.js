
import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu'
import {Link} from "react-router-dom";



class MenuHeader extends Component {
  render() {
    require('../styles/menu_style.css');
    return (

<div>
	<h1 id="menu-h1">Galanga Thai Cuisine</h1>
	<p id="menu-p">Delicious and Elegant Thai Dining in Downtown Tacoma.</p>
	<nav id="desktop-nav">
		<Link to="/">
		Welcome</Link>
		<Link className="urhere" to="./lunchPage">
		Lunch</Link>
		<Link to="./dinnerPage">
		Dinner</Link>
		<Link to="/">
		Contact</Link>
		<Link to="/">
		Directions</Link>
		<Link to="/">
		What is Galanga?</Link>
	</nav>
	<header className="menu_one">
		<Menu right>
			<Link id="home" className="menu-item" to="/">
			Home</Link>
			<Link id="home" className="menu-item" to="/">
			Lunch Menu</Link>
			<Link id="home" className="menu-item" to="/">
			Dinner Menu</Link>
			<Link id="home" className="menu-item" to="/">
			About</Link>
			<Link id="home" className="menu-item" to="/">
			Contact</Link>
			<Link id="home" className="menu-item" to="/">
			Directions</Link>
			<Link id="home" className="menu-item" to="/">
			What is Galanga?</Link>
		</Menu>
	</header>
</div>








    );
  }
}

export default MenuHeader;
