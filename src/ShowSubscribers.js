import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';



// let subscribers = [
//       {
//         id: 1,
//         name: "Shilpa Bhat",
//         phone: "8888888888"
//       },
//       {
//         id: 2,
//         name: "Srishti Gupta",
//         phone: "9999999999"
//       }
//     ];

class ShowSubscribers extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  // }

  // clickHandler(message){
  //   alert(message);
  // }

  // componentDidMount(){
  //   let newSubscriber = {
  //       id: 1,
  //       name: "Shilpa Bhat",
  //       phone: "8888888888"
  //     }

  //   let subscriberList = this.state.subscribersListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscribersListToShow: subscriberList});
  // }

  render() {
    return (
      <div className="component-container">
        <Header heading="Phone Directory"/> {/* Props -- Parent Element */}
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.subscriberList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" /*span>onClick={this.clickHandler.bind(this, "Delete")}*/>Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;


// import Header from "./Header";
// import './App.css';
// import React from "react";

// class App extends React.Component {
//   render(){
//     let subscribers = [
//       {
//         id: 1,
//         name: "Shilpa",
//         phone: "9999999"
//       },
//       {
//         id: 2,
//         name: "Srishti",
//         phone: "9999999"
//       }
//     ]

//     return (
//       <div>
//         <Header/>
//           <button className="addBtn">Add</button>
//           <div id="info">
//             <span className="name-heading">Name</span><br/>
//             <span className="phone-heading">Phone</span>
//           </div>

//           {
//             subscribers.map(sub => {
//               return (
//                 <div id = {sub.id} className="info">
//                   <span>{sub.name}</span><br/>
//                   <span >{sub.phone}</span>
//                 </div>
//               )
//             })
//           }
//       </div>
//     );
//   }
// }

// export default App;


// // ReactDOM.render(
// //   <div>
// //     <label for="username">Username: </label> <br/>
// //     <input id="username" type="text"/><br/><br/>
// //     <label for="password">Password: </label><br/>
// //     <input id="password" type="password"/><br/><br/>
// //   </div>,
// //   document.getElementById('root')
// // );