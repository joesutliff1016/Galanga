
import React, {Component} from 'react';
import MenuHeader from '../pages/menuHeader.js';
import AdminDinnerApps from '../admin/adminDinnerApps.js';
import AdminDinnerSoups from '../admin/adminDinnerSoups.js';
import AdminDinnerSalads from '../admin/adminDinnerSalads.js';
import AdminDinnerNoodles from '../admin/adminDinnerNoodles.js';
import AdminDinnerCurry from '../admin/adminDinnerCurry.js';
import AdminDinnerEntrees from '../admin/adminDinnerEntrees.js';
import AdminDinnerRice from '../admin/adminDinnerRice.js';
import AdminDesserts from '../admin/adminDesserts.js';
import AdminDrinks from '../admin/adminDrinks.js';
import Footer from '../pages/footer.js';


class AdminDinner extends Component {

  render() {



    return (

 <div className="App">
   <div className="menu_content">
      <MenuHeader />
      <div className="menu_two">
       <div id="admin_container">
         <AdminDinnerApps />
         <AdminDinnerSoups />
         <AdminDinnerSalads />
         <AdminDinnerNoodles />
         <AdminDinnerCurry />
         <AdminDinnerEntrees />
         <AdminDinnerRice />
         <AdminDesserts />
         <AdminDrinks />
         </div>
     </div>
      <Footer />
   </div>
</div>





    );
  }
}



export default AdminDinner;
