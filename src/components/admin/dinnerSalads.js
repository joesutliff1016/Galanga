
import React, {Component} from 'react';
import firebase from '../firebase.js';



class DinnerSalads extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerSalad: []
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
    const itemsRef = firebase.database().ref('dinnerSalad');
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
    const itemsRef = firebase.database().ref('dinnerSalad');
    itemsRef.on('value', (snapshot) => {
      let dinnerSalad = snapshot.val();
      let newState = [];
      for (let item in dinnerSalad) {
        newState.push({
          id: item,
          title: dinnerSalad[item].title,
          description: dinnerSalad[item].description,
          price: dinnerSalad[item].price
        });
      }
      this.setState({
        dinnerSalad: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerSalad/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (


      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">SALADS</p>
         <div className="line"></div>
            {this.state.dinnerSalad.map((item) => {
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




export default DinnerSalads;
