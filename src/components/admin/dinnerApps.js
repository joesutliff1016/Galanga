
import React, {Component} from 'react';
import firebase from '../firebase.js';



class DinnerApps extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerApps: []
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
    const itemsRef = firebase.database().ref('dinnerApps');
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
    const itemsRef = firebase.database().ref('dinnerApps');
    itemsRef.on('value', (snapshot) => {
      let dinnerApps = snapshot.val();
      let newState = [];
      for (let item in dinnerApps) {
        newState.push({
          id: item,
          title: dinnerApps[item].title,
          description: dinnerApps[item].description,
          price: dinnerApps[item].price
        });
      }
      this.setState({
        dinnerApps: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerApps/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
      <h2>DINNER MENU</h2>
      <p className="restaurant-hours"> Served Monday thru Friday, 2:30 pm - 9:00 pm. and Saturday 5:00 pm - 9:00 pm. Visit us before or after the museum or theatre, or spend a relaxing evening with friends at Galanga.</p>
        <div className="menu-container-inner">
         <p className="menu-category">APPETIZERS</p>
         <div className="line"></div>
            {this.state.dinnerApps.map((item) => {
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




export default DinnerApps;
