
import React, {Component} from 'react';
import firebase from '../firebase.js';



class LunchSalads extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      lunchSalad: []
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
    const itemsRef = firebase.database().ref('lunchSalad');
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
    const itemsRef = firebase.database().ref('lunchSalad');
    itemsRef.on('value', (snapshot) => {
      let lunchSalad = snapshot.val();
      let newState = [];
      for (let item in lunchSalad) {
        newState.push({
          id: item,
          title: lunchSalad[item].title,
          description: lunchSalad[item].description,
          price: lunchSalad[item].price
        });
      }
      this.setState({
        lunchSalad: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/lunchSalad/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">SALADS</p>
         <div className="line"></div>
            {this.state.lunchSalad.map((item) => {
            return (
            <table key={item.id}>
            <tr>
               <th>{item.title}</th>
            </tr>
            <tr>
               <td className="description">{item.description}</td>
            </tr>
            <tr>
               <td className="price">{item.price}</td>
            </tr>
            </table>
            )
            })}
         </div>
      </div>


    );
  }
}




export default LunchSalads;
