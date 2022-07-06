import './App.css'
import IPFS from './IPFS';
import Web3storage from './Web3storage';
import Nftstorage from './Nftstorage';
function App() {
 
  return (
    <div className="App">
      <IPFS />
      <Web3storage />
      <Nftstorage />
    </div>
  );
}
export default App