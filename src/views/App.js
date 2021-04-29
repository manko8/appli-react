import logo from '../assets/logo.svg';
import './App.css';
import Counter from '../component/counter.js'
import Login from '../component/login.js'
import Test1 from '../component/test1.js'
import Test2 from '../component/test2.js'//Les composants doivent obligatoirement commencer par une majuscule
import React from 'react'


class App extends React.Component {
  render (){
    return (
    <div className="App">
      <Test2/>
    </div>
    );
  }
}


export default App;
