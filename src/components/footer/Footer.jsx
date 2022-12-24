import "./footer.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footerItems">
        <div className="footer">
          <ul className="listAbout">
            <label>About</label>
            <li className="aboutItem"><Link to="" className="link">About Cinnamon Hotels & Resorts</Link></li>
            <li className="aboutItem"><Link to="" className="link">Media & Accolades</Link></li>
            <li className="aboutItem"><Link to="" className="link">Gallery</Link></li>
            <li className="aboutItem"><Link to="" className="link">CSR & Sustainability</Link></li>
            <li className="aboutItem"><Link to="" className="link">John Keells Group</Link></li>
            <li className="aboutItem"><Link to="" className="link">Cinnamon Air</Link></li>
            <li className="aboutItem"><Link to="" className="link">Nature Trails</Link></li>
            <li className="aboutItem"><Link to="" className="link">Cinnamon Box Office</Link></li>
            <li className="aboutItem"><Link to="" className="link">Terms & Conditions</Link></li>
            <li className="aboutItem"><Link to="" className="link">Privacy Statement</Link></li>
          </ul>

          <ul className="listAdvertise">
            <label>Get In Touch</label>
            <li className="adItem"><Link to="" className="link">Know Sri Lanka</Link></li>
            <li className="adItem"><Link to="" className="link">Know Maldives</Link></li>
            <li className="adItem"><Link to="" className="link">Contact Us</Link></li>
            <label style={{ paddingTop: "50px" }}>Sections</label>
            <li className="adItem"><Link to="" className="link">Careers</Link></li>
            <li className="adItem"><Link to="" className="link">Blog</Link></li>
            <li className="adItem"><Link to="" className="link">Cinnamon Affiliate Programme</Link></li>
          </ul>

          <ul className="social">
            <div className="socialThings">
              <label>Follow Us</label>
              <div className="socialIcons">
                <FacebookOutlinedIcon className="sIcons" />
                <TwitterIcon className="sIcons" />
                <LinkedInIcon className="sIcons" />
                <InstagramIcon className="sIcons" />
                <YouTubeIcon className="sIcons" />
              </div>
            </div>
            <div className="message">
              <div className="hMessage">
                <label>Get Cinnamon in your inbox</label>
              </div>
              <div className="textBox">
                <input
                  type="text"
                  id="email"
                  placeholder="Enter email"
                  required
                />
                <button type="submit">
                  <ChevronRightIcon className="rightSearch" type="submit" />
                </button>
              </div>
              <div className="check">
                <input type="checkbox" id="val" name="val" value="values" />
                <label
                  style={{
                    fontSize: "13px",
                    color: "#9a9a9a",
                    fontStyle: "none",
                  }}
                  for="val"
                  className="pLabel"
                >
                  By Checking this box, I consent to the processing of my
                  Personal Data by Cinnamon for the purpose and within the
                  Conditions set out in this form and the{" "}
                  <b style={{ color: "#1b1b1b" }}>
                    Cinnamon Data Protection Policy
                  </b>{" "}
                </label>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
