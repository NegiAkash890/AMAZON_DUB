import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User", authUser);
      //If user is Logged In
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      //If user is Logged Out
      else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Make sure the Home route at bottom*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/*Home Component*/}
      </div>
    </Router>
  );
}

export default App;
