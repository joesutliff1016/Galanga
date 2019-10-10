
import React, {Component} from 'react';
import firebase from '../firebase.js';



class DinnerCurry extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerCurry: []
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
    const itemsRef = firebase.database().ref('dinnerCurry');
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
    const itemsRef = firebase.database().ref('dinnerCurry');
    itemsRef.on('value', (snapshot) => {
      let dinnerCurry = snapshot.val();
      let newState = [];
      for (let item in dinnerCurry) {
        newState.push({
          id: item,
          title: dinnerCurry[item].title,
          description: dinnerCurry[item].description,
          price: dinnerCurry[item].price
        });
      }
      this.setState({
        dinnerCurry: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerCurry/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (


      <div className="menu-container-outer">
        <div className="menu-container-inner">
         <p className="menu-category">CURRY DISHES</p>
         <div className="line"></div>
            {this.state.dinnerCurry.map((item) => {
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




export default DinnerCurry;
