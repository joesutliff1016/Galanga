
import React, {Component} from 'react';
import firebase from '../firebase.js';



class Desserts extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      desserts: []
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
    const itemsRef = firebase.database().ref('desserts');
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
    const itemsRef = firebase.database().ref('desserts');
    itemsRef.on('value', (snapshot) => {
      let desserts = snapshot.val();
      let newState = [];
      for (let item in desserts) {
        newState.push({
          id: item,
          title: desserts[item].title,
          description: desserts[item].description,
          price: desserts[item].price
        });
      }
      this.setState({
        desserts: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/desserts/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">DESSERTS</p>
         <div className="line"></div>
            {this.state.desserts.map((item) => {
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




export default Desserts;
