import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';
import CreatePizzaPage from './pages/CreatePizzaPage';

function App() {
  const [count, setCount] = useState(0);
  const handleLog = () =>{
    console.log('Hello World');
  }
  const CountIncrease = ()=>{
    setCount(count + 1);
  }
  const nameDev = 'John Doe';
  const nameList = ['minh',    'nam',   'yaf']
  const nameObject = {
    age : 23,
    name : 'minh',
  }
  return (
    <div className="App">
     <Header/>
     <HomePage/>
     <CreatePizzaPage/>
     <Footer/>
    </div>
  );
}

export default App;
