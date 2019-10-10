
import React, {Component} from 'react';
import firebase from '../firebase.js';



class DinnerSoups extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerSoups: []
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
    const itemsRef = firebase.database().ref('dinnerSoups');
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
    const itemsRef = firebase.database().ref('dinnerSoups');
    itemsRef.on('value', (snapshot) => {
      let dinnerSoups = snapshot.val();
      let newState = [];
      for (let item in dinnerSoups) {
        newState.push({
          id: item,
          title: dinnerSoups[item].title,
          description: dinnerSoups[item].description,
          price: dinnerSoups[item].price
        });
      }
      this.setState({
        dinnerSoups: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerSoups/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">SOUPS</p>
         <div className="line"></div>
            {this.state.dinnerSoups.map((item) => {
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




export default DinnerSoups;
