import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51I9Cs1GH0MGi3mCbSZBDSmDfxCa9XwCxb4Qk5UGNsMU5yvY7Ri9ne8YQHoaKcMgm1WBUpAc6bkUUDtP0SOfu51up00OcUDFipb"
);
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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
