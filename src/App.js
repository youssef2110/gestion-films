
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/About";
import Film from "./components/Film";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
       <nav
        style={{
          display: 'flex',
          width :'50%',
          margin : '0 auto',
          alignItems : 'center',
          justifyContent : 'space-between'
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/film">Film</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="film" element={<Film />} />
      </Routes>
    </div>
  );
}

export default App;
