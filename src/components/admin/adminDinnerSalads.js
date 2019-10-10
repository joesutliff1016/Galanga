
import React, {Component} from 'react';
import firebase from '../firebase.js';



class AdminDinnerSalads extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: '',
      itemDescription: '',
      itemPrice: '',
      dinnerSalad: []
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
    const itemsRef = firebase.database().ref('dinnerSalad');
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
    const itemsRef = firebase.database().ref('dinnerSalad');
    itemsRef.on('value', (snapshot) => {
      let dinnerSalad = snapshot.val();
      let newState = [];
      for (let item in dinnerSalad) {
        newState.push({
          id: item,
          title: dinnerSalad[item].title,
          description: dinnerSalad[item].description,
          price: dinnerSalad[item].price
        });
      }
      this.setState({
        dinnerSalad: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/dinnerSalad/${itemId}`);
    itemRef.remove();
  }
  render() {

    return (
      <div className="App">

         <section className='add-item'>
              <h2>Dinner Salads</h2>
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
                 {this.state.dinnerSalad.map((item) => {
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


export default AdminDinnerSalads;
