import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./styles.scss";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [path, setPath] = useState("/");

  useEffect(() => {
    var qs="";
    switch(path){
      case "/":qs="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";
      break;
      case "/doge":qs="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin&sparkline=true"
      break;
      case "/abyss":qs="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=the-abyss&sparkline=true"
      break;
      case "/mithril":qs="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=mithril&sparkline=true"
      break;
      case "/bitcoen":qs="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoen&sparkline=true"
      break;
      default:qs="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";
    }


    axios
      .get(
        qs
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, [path]);


  return (
    <div className="App">
      <Navbar cb={setPath} />
      <Route exact
        path="/" 
        render={(props)=><Charts {...props} coinData={coinData}/>} 
      />
      <Route exact
        path="/doge" 
        render={(props)=><Charts {...props} coinData={coinData}/>} 
      />
      <Route exact
        path="/abyss" 
        render={(props)=><Charts {...props} coinData={coinData}/>} 
      />
      <Route exact
        path="/mithril" 
        render={(props)=><Charts {...props} coinData={coinData}/>} 
      />
      <Route exact
        path="/bitcoen" 
        render={(props)=><Charts {...props} coinData={coinData}/>} 
      />

    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
