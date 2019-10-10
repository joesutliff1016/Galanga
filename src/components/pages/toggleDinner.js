import React, {Component} from 'react';
import {Link} from "react-router-dom";
export default class ToggleDinner extends Component {

  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
      {this.state.on && (

        <p id="demo">A cream-colored root or rhizome with pink tips,
        galanga is sometimes called "Thai ginger". It lends its refreshing
        smell and warm, mildly spicy flavor to so many Thai dishes. In Thai,
        galanga is kha or khar. Tom Kha, the delicious Thai coconut-and-lime
        soup, means "boiled galanga." The root also flavors our curries, dipping
        sauces, satay and much more.</p>
      )}
        <Link to="/">Welcome</Link>
        <Link to="/lunchPage">Lunch</Link>
        <Link className="urhere" to="/dinnerPage">Dinner</Link>
        <Link to="/contactPage">Contact</Link>
        <Link onClick={this.toggle} to="/dinnerPage">What is Galanga?</Link>
        </div>
      )
    }
  }
