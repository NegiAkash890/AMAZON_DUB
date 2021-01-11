import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
