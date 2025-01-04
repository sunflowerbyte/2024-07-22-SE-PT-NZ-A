import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/maintenance">Maintenance</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/notices">Notices</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
