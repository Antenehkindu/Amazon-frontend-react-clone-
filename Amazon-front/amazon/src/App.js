import "./App.css";
import Checkout from "./components/CheckOut/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Checkout" element ={<Checkout/>}/>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
