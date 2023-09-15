import './App.scss';

import HomePage from './Example/HomePage';
import Header from './Example/Header/Header';
import Crud from './Example/Crud/Crud';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/crud" exact>
            <Crud/>
          </Route>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
