
import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({"activity":"Sit in the dark and listen to your favorite music with no distractions","type":"relaxation","participants":1,"price":0,"link":"","key":"9908721","accessibility":1})
  const getData = () => {
      fetch('http://www.boredapi.com/api/activity/')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
  }
  useEffect(() => {

    setInterval(() => {
      getData();
    }, 3000);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.activity}</p>
        <a className="App-link" rel="noopener noreferrer">
          {data?.type?.charAt(0).toUpperCase()+data?.type?.slice(1)}
        </a>
      </header>
    </div>
  );
}

export default App;
