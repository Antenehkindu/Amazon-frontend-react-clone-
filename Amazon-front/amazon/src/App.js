import "./App.css";
import Checkout from "./components/CheckOut/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className ="App">
      <Switch>
      <Route path ="/Checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path ="/">
        <Header />
        <Home />
      </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
