import Home from './Screens/Home';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';
import Profile from './Screens/Profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/signIn" element={<SignIn/>} />
      </Routes>
      
    </div>
  );
}

export default App;
