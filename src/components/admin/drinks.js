
import React, {Component} from 'react';
import firebase from '../firebase.js';



class Drinks extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      drinks: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('drinks');
    const item = {
      title: this.state.menuItem,
      description: this.state.itemDescription,
      price: this.state.itemPrice
    }
    itemsRef.push(item);
    this.setState({
      menuItem: '',
      itemDescription: '',
      itemPrice: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('drinks');
    itemsRef.on('value', (snapshot) => {
      let drinks = snapshot.val();
      let newState = [];
      for (let item in drinks) {
        newState.push({
          id: item,
          title: drinks[item].title,
          description: drinks[item].description,
          price: drinks[item].price
        });
      }
      this.setState({
        drinks: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/drinks/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">DRINKS</p>
         <div className="line"></div>
            {this.state.drinks.map((item) => {
            return (
            <table key={item.id}>
            <tr>
               <th>{item.title}</th>
            </tr>
            <tr>
               <td className="description">{item.description}</td>
            </tr>
            <tr>
               <td align="bottom" className="price">{item.price}</td>
            </tr>
            </table>
            )
            })}
         </div>
      </div>


    );
  }
}




export default Drinks;
