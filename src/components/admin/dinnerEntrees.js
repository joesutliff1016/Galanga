
import React, {Component} from 'react';
import firebase from '../firebase.js';



class DinnerEntrees extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerEntrees: []
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
    const itemsRef = firebase.database().ref('dinnerEntrees');
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
    const itemsRef = firebase.database().ref('dinnerEntrees');
    itemsRef.on('value', (snapshot) => {
      let dinnerEntrees = snapshot.val();
      let newState = [];
      for (let item in dinnerEntrees) {
        newState.push({
          id: item,
          title: dinnerEntrees[item].title,
          description: dinnerEntrees[item].description,
          price: dinnerEntrees[item].price
        });
      }
      this.setState({
        dinnerEntrees: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerEntrees/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (


      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">ENTREES</p>
         <div className="line"></div>
            {this.state.dinnerEntrees.map((item) => {
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




export default DinnerEntrees;
