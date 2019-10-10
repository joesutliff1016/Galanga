
import React, {Component} from 'react';
import firebase from '../firebase.js';



class AdminDesserts extends Component {
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
      <div className="App">

         <section className='add-item'>
              <h2>Desserts</h2>
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
                 {this.state.desserts.map((item) => {
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


export default AdminDesserts;
