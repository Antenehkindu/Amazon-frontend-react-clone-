import "./App.css";
import Checkout from "./components/CheckOut/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Login from "./components/login/Login";
import { useStateValue } from "./components/stateprovider/StateProvider";
import { useEffect } from "react";
import { auth } from "./components/firebase/firebase";


function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser) {
        // if the user is login
        dispatch({
          type:'SET_USER',
          user: authUser,
        });
      } else{
        // the user is just logout
        dispatch({
          type:'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/Checkout" element ={<Checkout/>}/>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
