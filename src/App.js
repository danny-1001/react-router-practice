import "./Styles/Styles.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
