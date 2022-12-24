import "./destination.css";
import * as React from "react";

const Destination = () => {
  return (
    <div className="destination">
      <div className="destinationsection">
        <div className="desHeading">
          <h3>Our Destinations</h3>
        </div>
        <div className="destSelect">
          <div className="dropdown">
            <select
              className="form-select"
              aria-label=".form-select-lg example"
            >
              <option className="dvalue" value="1">
                Cinnamon Life
              </option>
              <option className="dvalue" value="2">
                Cinnamon Grand Colombo
              </option>
              <option className="dvalue" value="3">
                Cinnamon Lakeside Colombo
              </option>
              <option className="dvalue" value="4">
                Cinnamon Red Colombo
              </option>
              <option className="dvalue" value="5">
                Cinnamon Bentota Beach
              </option>
              <option className="dvalue" value="6">
                Cinnamon Bey Beruwala
              </option>
              <option className="dvalue" value="7">
                Hikka Tranz by Cinnamon
              </option>
              <option className="dvalue" value="8">
                Cinnamon Wild Yala
              </option>
              <option className="dvalue" value="9">
                Trinco Blu by Cinnamon
              </option>
              <option className="dvalue" value="10">
                Cinnamon Citadel Kandy
              </option>
              <option className="dvalue" value="11">
                Cinnamon Lodge Habarana
              </option>
              <option className="dvalue" value="12">
                Habarana Village by Cinnamon
              </option>
              <option className="dvalue" value="13" selected>
                Cinnamon Velifushi Maldives
              </option>
              <option className="dvalue" value="14">
                Cinnamon Hukuraa Huraa Maldives
              </option>
              <option className="dvalue" value="15">
                Cinnamon Dhonveli Maldives
              </option>
              <option className="dvalue" value="16">
                Ellaidhoo Maldives by Cinnamon
              </option>
            </select>
          </div>
        </div>
        <div className="imageDesc">
          <div className="desImage">
          <img src="https://www.cinnamonhotels.com/themes/cinnamon/images/maldives.png" alt="" className="dImage1" />
            <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/cinnamon-dhonveli-dest-0803.png" alt="" className="dImage2" />
            
          </div>
          <div className="imDesc">
          <div className="card">
  <div class="card-body">
   <h4>Cinnamon Dhonveli Maldives</h4>
   <p>Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.</p>
   <button>Discover More</button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
