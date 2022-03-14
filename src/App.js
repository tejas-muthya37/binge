import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import Movies from "./Movies/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>

          <Route exact path="/movies">
            <Navbar />
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
