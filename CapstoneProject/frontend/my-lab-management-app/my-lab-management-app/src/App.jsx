import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Maintenance from './components/Maintenance';
import Inventory from './components/Inventory';
import Notices from './components/Notices';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
    </Router>
  );
};

export default App;
