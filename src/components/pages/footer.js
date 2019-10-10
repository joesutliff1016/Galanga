import React, {Component} from 'react';




class Footer extends Component {
  render() {
    require('../styles/footer_style.css');
    return (
         <footer>
            <i className="fas fa-map-marker-alt">&nbsp; 1129 Broadway, Tacoma, Washington</i>
            <i className="fas fa-phone">&nbsp; 253-272-3393<br />Call for reservations and take-out orders!</i>
            <i className="far fa-clock">&nbsp; Our hours: Monday - Friday, 11:00 am - 9:00 pm<br /> Saturday, 5:00 pm - 9:00 pm</i>


            <div id="social_icons">
               <i className="fab fa-facebook-square" title="facebook"></i>
               <i className="fab fa-yelp" title="yelp"></i>
               <i className="fab fa-tripadvisor" title="trip advisor"></i>
            </div>
            <div id="small"><small>Copywright&copy; Galanga Thai Cuisine</small></div>
         </footer>

    );
  }
}


export default Footer;
