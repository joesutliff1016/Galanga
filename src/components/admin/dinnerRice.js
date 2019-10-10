
import React, {Component} from 'react';
import firebase from '../firebase.js';



class DinnerRice extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerRice: []
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
    const itemsRef = firebase.database().ref('dinnerRice');
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
    const itemsRef = firebase.database().ref('dinnerRice');
    itemsRef.on('value', (snapshot) => {
      let dinnerRice = snapshot.val();
      let newState = [];
      for (let item in dinnerRice) {
        newState.push({
          id: item,
          title: dinnerRice[item].title,
          description: dinnerRice[item].description,
          price: dinnerRice[item].price
        });
      }
      this.setState({
        dinnerRice: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerRice/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (


      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">RICE</p>
         <div className="line"></div>
            {this.state.dinnerRice.map((item) => {
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




export default DinnerRice;
