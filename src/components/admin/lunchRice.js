
import React, {Component} from 'react';
import firebase from '../firebase.js';



class LunchRice extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      lunchRice: []
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
    const itemsRef = firebase.database().ref('lunchRice');
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
    const itemsRef = firebase.database().ref('lunchRice');
    itemsRef.on('value', (snapshot) => {
      let lunchRice = snapshot.val();
      let newState = [];
      for (let item in lunchRice) {
        newState.push({
          id: item,
          title: lunchRice[item].title,
          description: lunchRice[item].description,
          price: lunchRice[item].price
        });
      }
      this.setState({
        lunchRice: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/lunchRice/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">RICE</p>
         <div className="line"></div>
            {this.state.lunchRice.map((item) => {
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




export default LunchRice;
