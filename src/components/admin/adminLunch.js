
import React, {Component} from 'react';
import MenuHeader from '../pages/menuHeader.js';
import AdminLunchApps from './adminLunchApps.js';
import AdminLunchSoups from './adminLunchSoups.js';
import AdminLunchSalads from './adminLunchSalads.js';
import AdminLunchNoodles from './adminLunchNoodles.js';
import AdminLunchCurry from './adminLunchCurry.js';
import AdminLunchWoks from './adminLunchWoks.js';
import AdminLunchRice from './adminLunchRice.js';
import AdminDesserts from './adminDesserts.js';
import AdminDrinks from './adminDrinks.js';
import Footer from '../pages/footer.js';




class AdminLunch extends Component {

  render() {

    return (

 <div className="App">
   <div className="menu_content">
      <MenuHeader />
      <div className="menu_two">
       <div id="admin_container">
         <AdminLunchApps />
         <AdminLunchSoups />
         <AdminLunchSalads />
         <AdminLunchNoodles />
         <AdminLunchCurry />
         <AdminLunchWoks />
         <AdminLunchRice />
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



export default AdminLunch;
