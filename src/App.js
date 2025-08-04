import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/LoginPage';
import Header from './component/Header';
import SignupPage from './component/SignUp';
import HomePage from './component/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
