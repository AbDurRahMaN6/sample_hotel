import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar-expand-lg">
        <div className="container-fluid">
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

          <div className="headerSite">
            <ul className="headerItem m-auto mb-2 mb-lg-0">
              <li className="header-item dropdown">
                <Link
                  className="header-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu">
                    <h6>About the Hotel</h6>
                  <li>
                    <Link className="dropdown-item" href="#">
                    Overview
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                    Explore Colombo
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                    Services & Facilities
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                    Map & Directions
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header-item dropdown">
                <Link
                  className="header-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rooms & Suites
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header-item dropdown">
                <Link
                  className="header-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dining
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header-item dropdown">
                <Link
                  className="header-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Experience
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header-item dropdown">
                <Link
                  className="header-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="header-item">
                <Link class="header-link" href="#">
                  Gallery
                </Link>
              </li>
              <li class="header-item">
                <Link class="header-link" href="#">
                  Offers
                </Link>
              </li>
              <li className="header-item dropdown">
                <Link
                  className="header-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="buttons ms-auto">
        <button type="button" className="btn">
          Find a Hotel
        </button>
      </div>
    </div>
  );
};

export default Header;
