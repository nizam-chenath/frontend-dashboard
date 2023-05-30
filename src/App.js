import './App.css';
import Dashboard from './components/Dashboard';
import LoginPage from './components/Login';
import RegisterPage from './components/RegisterPage';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      
   
    </div>
  );
}

export default App;
