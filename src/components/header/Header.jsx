import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

         <div className="ddList">
         <div className="dropdown">
            <button className="dropBtn" type="button" style={{width: "110px"}}>About <span className="arrow"></span>
             </button>
            <div className="ddContent" 
            style={{marginLeft: "-50px"}}
            >
              <h4>About The Hotel</h4>
              <Link className="linking">Overview</Link>
              <Link className="linking">Explore Colombo</Link>
              <Link className="linking">Services & Facilities</Link>
              <Link className="linking">Map & Directions</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropBtn" type="button" style={{width: "170px"}}>Rooms & Suites<span className="arrow"></span></button>
            <div className="ddContent" 
            style={{marginLeft: "-160px", marginTop: "0px"}}>
              {/* <Link className="linking">Link 1</Link>
              <Link className="linking">Link 2</Link>
              <Link className="linking">Link 3</Link> */}
              <div className="row">
        <div className="column">
          <h4>Rooms</h4>
          <Link className="roomLink">Deluxe Lake View</Link>
          <Link className="roomLink">Deluxe Ocean View</Link>
          <Link className="roomLink">Premier Balcony</Link>
          <Link className="roomLink">Premier Ocean View</Link>
        </div>
        <div class="column">
          <h4>Horizon Club</h4>
          <Link className="roomLink">Horizon Club Lake View</Link>
          <Link className="roomLink">Horizon Club Ocean View</Link>
        </div>
        <div class="column">
          <h4> Suites</h4>
          <Link className="roomLink">Executive Suites</Link>
          <Link className="roomLink">Specialty Suites</Link>
          <Link className="roomLink">Shangri-La Suite</Link>
        </div>
        <div class="column">
          <h4>Connecting Rooms</h4>
          <Link className="roomLink">Executive Suite & Premier Ocean Room Connecting</Link>
          <Link className="roomLink">Two Deluxe Lake View Rooms Connecting</Link>
        </div>

        <hr></hr>
      </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropBtn" type="button" 
            style={{width: "120px"}} 
            >Dinning<span className="arrow"></span></button>
            <div className="ddContent" 
            style={{float: "left", marginLeft: "-330px"}}
            >
              <Link className="linking">Link 1</Link>
              <Link className="linking">Link 2</Link>
              <Link className="linking">Link 3</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropBtn" type="button" 
            style={{width: "150px"}} 
            >Experience<span className="arrow"></span></button>
            <div className="ddContent" 
            style={{marginLeft: "-450px"}}
            >
              <Link className="linking">Link 1</Link>
              <Link className="linking">Link 2</Link>
              <Link className="linking">Link 3</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropBtn" type="button" style={{width: "120px"}} >Events<span className="arrow"></span></button>
            <div className="ddContent" 
            style={{marginLeft: "-600px"}}
            >
              <Link className="linking">Link 1</Link>
              <Link className="linking">Link 2</Link>
              <Link className="linking">Link 3</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropBtn" style={{width: "110px"}} >Gallery</button>
          </div>
          <div className="dropdown">
            <button className="dropBtn" style={{width: "110px"}} >Offers</button>
          </div>
          <div className="dropdown">
            <button className="dropBtn" type="button" style={{width: "100px"}} >More<span className="arrow"></span></button>
            <div className="ddContent" 
            style={{marginLeft: "-940px"}}
            >
              <Link className="linking">Link 1</Link>
              <Link className="linking">Link 2</Link>
              <Link className="linking">Link 3</Link>
            </div>
          </div>
          
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
