
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListProds from './components/ListProds';
import ProdDetails from './components/ProdDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <ListProds/>}/>
      <Route path="/:idprod" element={ <ProdDetails/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
