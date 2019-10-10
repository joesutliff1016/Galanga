
import React, {Component} from 'react';
import firebase from '../firebase.js';



class AdminDinnerNoodles extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerNoodles: []
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
    const itemsRef = firebase.database().ref('dinnerNoodles');
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
    const itemsRef = firebase.database().ref('dinnerNoodles');
    itemsRef.on('value', (snapshot) => {
      let dinnerNoodles = snapshot.val();
      let newState = [];
      for (let item in dinnerNoodles) {
        newState.push({
          id: item,
          title: dinnerNoodles[item].title,
          description: dinnerNoodles[item].description,
          price: dinnerNoodles[item].price
        });
      }
      this.setState({
        dinnerNoodles: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerNoodles/${itemId}`);
    itemRef.remove();
  }
  render() {

    return (
      <div className="App">

         <section className='add-item'>
              <h2>Dinner Noodles</h2>
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
                 {this.state.dinnerNoodles.map((item) => {
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


export default AdminDinnerNoodles;
