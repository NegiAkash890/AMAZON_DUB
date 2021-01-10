import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* Make sure the Home route at bottom*/}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/*Home Component*/}
      </div>
    </Router>
  );
}

export default App;
