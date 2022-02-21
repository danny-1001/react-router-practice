import "./Styles/Styles.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-switch";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
