import React from 'react';
import './Header.css';

const Header = function(properties) {
    // const headerStyle = {
    //     textAlign: 'center',
    //     padding: 20,
    //     background: '#000',
    //     color: '#fff',
    //     textTransform: 'uppercase',
    //     marginTop: 10,
    //  };

   return (
       <div className="header">
         {properties.heading}
         {/* <Header/> */}
       </div>
   )
}

export default Header;