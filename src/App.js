import React, {useState} from 'react';
import './App.css';
import Dinner from './Dinner';
import {Message} from './Message.js';

function App() {
  let [count, setcount] = useState(1);
  let [isMorning,setMorning] = useState(true);

  return (
    <div className="App">
      <h1>Hello Wrold from <i>Naeem</i></h1>
      <hr />
      <Dinner DishName="Chicken Karahi" Sweet="Kheer"/>
      <hr />
      <Dinner DishName="Chicken Biryani" Sweet="Gajar ka Halwa"/>
      <hr />
      {/* <h3>Value of Counter variable is : {count}</h3> */}
      <h2 className = {isMorning ? "Morning" : "Night"}>Have a Good {isMorning ? "Morning" : "Night"}</h2>
      <button onClick={()=>setMorning(!isMorning)}>Light update</button>
      <Message counter={count}/>
      <br />
      {/* <button onClick={()=>alert("hello")}>Update Counter</button> */}
      <button onClick={()=>setcount(++count)}>Update Counter</button>
    </div>
  );
}
// for string concatination $
export default App;
