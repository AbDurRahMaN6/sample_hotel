import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Slider from "../../components/slider/Slider"
import Destination from "../destination/Destination"
import Experiences from "../experience/Experiences"
import Offers from "../offers/Offers"
import Footer from "../../components/footer/Footer"
import Last from "../../assets/Last.png"


const Home = () => {
    return(
        <div>
            <Navbar />
            <Header />
            <Slider />
            <Destination />
            <Experiences />
            <Offers />
            <Footer />
            <div className="finalImage">
                <img src={Last} alt="" className="Image" />
            </div>
        </div>
    )
}

export default Home