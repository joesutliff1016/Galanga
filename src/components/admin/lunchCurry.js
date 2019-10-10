
import React, {Component} from 'react';
import firebase from '../firebase.js';



class LunchCurry extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      lunchCurry: []
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
    const itemsRef = firebase.database().ref('lunchCurry');
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
    const itemsRef = firebase.database().ref('lunchCurry');
    itemsRef.on('value', (snapshot) => {
      let lunchCurry = snapshot.val();
      let newState = [];
      for (let item in lunchCurry) {
        newState.push({
          id: item,
          title: lunchCurry[item].title,
          description: lunchCurry[item].description,
          price: lunchCurry[item].price
        });
      }
      this.setState({
        lunchCurry: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/lunchCurry/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">CURRY</p>
         <div className="line"></div>
            {this.state.lunchCurry.map((item) => {
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




export default LunchCurry;
