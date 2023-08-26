import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PaySuccess from './pages/PaySuccess';
import SendToken from './pages/SendToken';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/send" element={<SendToken />} />
        <Route path="/success" element={<PaySuccess />} />
      </Routes>

      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <SendToken/> */}
      {/* <PaySuccess /> */}
    </Router>
  );
}

export default App;
