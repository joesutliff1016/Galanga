import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import ToggleContact from './toggleContact.js';
import Footer from './footer.js';



class Contactpage extends Component {
  render() {
    require('../styles/menu_style.css');
    return (

      <div className="App">
   <div id="menu_content">

      <header className="contact_one">

      <nav>
         <ToggleContact />
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

      <div className="contact_container">
      <h2>CONTACT US</h2>
      <form id="contact-form" method="post" action="">

       <div class="messages"></div>

       <div class="controls">

         <div class="row">
           <div class="col-md-6">
             <div class="form-group">
               <label for="form_name">Firstname *</label>
               <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
               <div class="help-block with-errors"></div>
             </div>
           </div>
           <div class="col-md-6">
             <div class="form-group">
               <label for="form_lastname">Lastname *</label>
               <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
               <div class="help-block with-errors"></div>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-md-6">
             <div class="form-group">
               <label for="form_email">Email *</label>
               <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
               <div class="help-block with-errors"></div>
             </div>
           </div>
           <div class="col-md-6">
             <div class="form-group">
               <label for="form_phone">Phone</label>
               <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone"/>
               <div class="help-block with-errors"></div>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <div class="form-group">
               <label for="form_message">Message *</label>
               <textarea id="form_message" name="message" class="form-control" placeholder="Message for Galanga Thai *" rows="4"></textarea>
               <div class="help-block with-errors"></div>
             </div>
           </div>
           <div class="col-md-12">
             <input type="submit" class="btn btn-secondary btn-send" value="Send message"/>
           </div>
         </div>

       </div>

       </form>
      </div>


      </div>
      <Footer />
   </div>
</div>

    );
  }
}

export default Contactpage;
