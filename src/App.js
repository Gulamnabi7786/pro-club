import logo from "./logo.svg";
import "./App.css";
import Home from "./home.js";
import Member from "./member.js";
import About from "./about.js";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
          <Link to='/'></Link>
          <Link to='/member'></Link>
          <Link to='/about'></Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/member' element={<Member />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
