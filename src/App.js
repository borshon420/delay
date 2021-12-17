import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import RawJson from './components/RawJson';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/rawjson" element={<RawJson />}>
          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
