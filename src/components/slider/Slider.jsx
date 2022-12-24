import "./slider.css";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"


const Slider = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          style={{ width: "10px", height: "10px", borderRadius: "100%" }}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          style={{ width: "10px", height: "10px", borderRadius: "100%" }}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          style={{ width: "10px", height: "10px", borderRadius: "100%" }}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="img-fluid w-100 h-100 overflow-hidden"
            src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/{20B18195-50BE-4993-9CAE-0A141AFD3747}201126_slcb_homepage1.jpg"
          />
          <div className="carousel-caption d-block">
            <h4>Shangri-La Colombo</h4>
            <h6>
              A personal tropical sanctuary set within the heart of the city{" "}
            </h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid w-100 h-100 overflow-hidden"
            src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/4/D/{B4DC25D4-2F83-4133-BE8A-B139CBAD061B}200710_slcb_slcares.jpg"
          />
          <div className="carousel-caption d-block">
            <h4>Shangri-La Cares</h4>
            <h6>
              Your well-being in our care - learn more about our safety
              standards{" "}
            </h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid w-100 h-100 overflow-hidden"
            src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/F/A/5/{FA599018-DA27-4904-8585-D0B858639D94}SEAA We Are Vaccinated_website-home-banner.jpeg"
          />
          <div className="carousel-caption d-block">
            <h4>We Are Vaccinated</h4>
            <h6>
              Our highly vaccinated workforce provides&nbsp;the safest possible
              environment for&nbsp;your&nbsp;next holiday.{" "}
            </h6>
          </div>
        </div>
      </div>
      <div className="preNexButton">
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{backgroundColor: "#000", width: "40px" ,borderRadius: "100%", height: "40px", top: "40%", left: "2%"}}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{backgroundColor: "#000", width: "40px" ,borderRadius: "100%", height: "40px", top: "40%", right: "2%"}}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" ></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      
        <div className="headerSearch">
            <div className="hSearch">
            <div className="headerSearchItem">      
                <div className="startingDate">
                <CalendarMonthRoundedIcon className="headerIcon" />
                <span style={{marginLeft: "10px"}} onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
                {/* <span style={{marginLeft: "10px"}} onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}  `}</span> */}
                {openDate && <DateRange
                editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  className="dates"
                />}
                </div>
                <p style={{display: "flex", width: "100px", height: "50px", paddingLeft: "15px", alignItems:"center", marginTop: "-3px"}}>1 night</p>
                <div className="endingDate">
                    <span style={{marginLeft: "10px"}} onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                </div>
            </div>
            </div>

            <div className="headerSearchItems">
                <PersonOutlineIcon className="headerIcon" />
                <span style={{marginLeft: "10px"}} className="headerSearchText">1 Room, 1 Adult, 0 Children</span>
            </div>
            <div className="headerSearchIte">
                <LabelOutlinedIcon className="headerIcon" />
                <span style={{marginLeft: "10px"}} className="headerSearchText" placeholder="">Special Code</span>
            </div>
            <div className="headerSearchItemButton">
                <button className="searchButton">Search</button>
            </div>
        </div>
        
    </div>
  );
};

export default Slider;

