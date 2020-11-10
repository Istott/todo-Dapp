import React, {useEffect} from 'react';
import Web3 from 'web3';

import './App.css';

function App() {


  const loadBlockChainData =  async () => {
    const web3 = new Web3(web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log('network stuff', network)
  };

  // useEffect(()=> {
  //   loadBlockChainData()
  // }, [])

  const buttonsubmit= () => {
    loadBlockChainData()
  }


  return (
    <div className="App">
        <h1>hi</h1>
        <button onClick={buttonsubmit}>web3 activate</button>
    </div>
  );
}

export default App;
