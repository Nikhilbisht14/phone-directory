import Header from "./Header";

function App() {
  return (
    <div>
      <Header/>
        <button>Add</button>
        <div>
          <span>Name</span><br/>
          <span>Phone</span>
        </div>
    </div>
  );
}

export default App;


// ReactDOM.render(
//   <div>
//     <label for="username">Username: </label> <br/>
//     <input id="username" type="text"/><br/><br/>
//     <label for="password">Password: </label><br/>
//     <input id="password" type="password"/><br/><br/>
//   </div>,
//   document.getElementById('root')
// );