
import React, {Component} from 'react';
import firebase from '../firebase.js';



class AdminLunchCurry extends Component {
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
      <div className="App">

         <section className='add-item'>
              <h2>Lunch Curry</h2>
               <form onSubmit={this.handleSubmit}>
                 <input type="text" name="menuItem" placeholder="What's the name of the menu item?" onChange={this.handleChange} value={this.state.menuItem} />
                 <input type="text" name="itemDescription" placeholder="What's the description of the menu item?" onChange={this.handleChange} value={this.state.itemDescription} />
                 <input type="text" name="itemPrice" placeholder="What's the price of the menu item?" onChange={this.handleChange} value={this.state.itemPrice} />
                 <button>Add Menu Item</button>
               </form>
         </section>

         <section className='display-item'>
             <div className="wrapper">
               <ul>
                 {this.state.lunchCurry.map((item) => {
                   return (
                     <li key={item.id}>
                       <h3>{item.title}</h3>
                       <p>{item.description}</p>
                       <p>{item.price}</p>


                         <button onClick={() => this.removeItem(item.id)}>Remove Menu Item</button>

                     </li>
                   )
                 })}
               </ul>
             </div>
         </section>

         </div>


    );
  }
}


export default AdminLunchCurry;
