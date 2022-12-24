import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.PNG";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LanguageIcon from '@mui/icons-material/Language';


const Navbar = () => {
  return (
    <div className="navbar">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link to="/" className="logo">
                <img src={Logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="right">
              <div className="righItems">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <PersonOutlineIcon />
                </li>
                  <li className="nav-item">
                    <Link to="/login" className="linking">Sign In</Link>
                  </li>
                  <p>|</p>
                  <li className="nav-item">
                    <Link to="/join" className="linking">Join Now</Link>
                  </li>
                  <p>|</p>
                  <li className="nav-item">
                    <Link to="/find" className="linking">Find Reservations</Link>
                  </li>
                  <p>|</p>
                  <li className="nav-item">
                    <LanguageIcon style={{marginRight: "5px"}} />
                    <Link to="/lang" className="linking">English</Link>
                  </li>
                  <p>|</p>
                  <li className="nav-item">
                    <Link to="/currency" className="linking">LKR</Link>
                  </li>
                  <p>|</p>
                  <li className="nav-item">
                    <Link to="scan" className="linking"><PhoneAndroidIcon /></Link>
                  </li>
                </ul>
              </div>
              </div>
              </div>
          </nav>
      </div>
  );
};

export default Navbar;
