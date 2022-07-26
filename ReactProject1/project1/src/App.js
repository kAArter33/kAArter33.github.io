import './App.css';
import { Outlet, Link } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <nav>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </nav>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
