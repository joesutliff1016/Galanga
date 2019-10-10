
import React, {Component} from 'react';
import firebase from '../firebase.js';



class LunchApps extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      lunchApps: []
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
    const itemsRef = firebase.database().ref('lunchApps');
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
    const itemsRef = firebase.database().ref('lunchApps');
    itemsRef.on('value', (snapshot) => {
      let lunchApps = snapshot.val();
      let newState = [];
      for (let item in lunchApps) {
        newState.push({
          id: item,
          title: lunchApps[item].title,
          description: lunchApps[item].description,
          price: lunchApps[item].price
        });
      }
      this.setState({
        lunchApps: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/lunchApps/${itemId}`);
    itemRef.remove();
  }


  render() {
    return (

      <div className="menu-container-outer">
      <h2>LUNCH MENU</h2>
      <p className="restaurant-hours">Served Monday thru Friday, 11:00 am - 2:30 pm. Stop by for a casual or business lunch and try our delicious menu.</p>
        <div className="menu-container-inner">
         <p className="menu-category">APPETIZERS</p>
         <div className="line"></div>
            {this.state.lunchApps.map((item) => {
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




export default LunchApps;
