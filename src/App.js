import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import jsonData from './components/etsy.json';

function App() {
    const loadData = JSON.parse(JSON.stringify(jsonData));
   // console.log(loadData);
 
    return ( <Listing items={loadData}/> );
}

export default App;