import './App.css';
import Navbar from '../src/componetns/Navbar'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Employees from '../src/Pages/Employees'
import EmployProvider from '../src/context/EmployesContext'

function App() {
  return (
    <EmployProvider>
    <div>
      <Router>
      <Navbar/>
          <div className="container">
          <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/employess">
              <Employees/>
          </Route>
          <Redirect to="/"/>
          </Switch>
          </div>
      </Router>
    </div>
    </EmployProvider>
  );
}

export default App;
