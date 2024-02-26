import './App.css';
import UserCards from './components/UserCards.js';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser'; // Import the AddUser component
import { Routes, Route, Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// Navbar component
const Navbar = () => {
  // Get the total number of unique products in the cart
  // const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-light  " style={{ backgroundColor: " rgb(64, 114, 134)", width: "100%" }}>
      <div className="container-fluid">
        <img
          src="https://cdn.pixabay.com/photo/2019/08/11/18/48/icon-4399681_1280.png"
          alt="Shopping Cart"
          style={{ width: '50px', height: '50px', borderRadius: '25px', objectFit: 'cover' }}
        />
        <h1 className="navbar-brand text-light" style={{ paddingLeft: '30px' }}>
          All User Details
        </h1>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav " style={{ gap: "10px", }}>
            <li className="nav-item">
              <Link to="/" className="nav-link text-light " style={{ fontSize: "20px" }}>
                <PeopleAltIcon /> Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/adduser" className="nav-link text-light" style={{ fontSize: "19px" }}>
                <PersonAddIcon /> Add Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// App component
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserCards />} />
        <Route path="/users/edit/:userid" element={<EditUser />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}
export default App;
