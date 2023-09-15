import AboutUs from "../../components/Home/AboutUS/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import FAQ from "../../components/Home/FAQ/FAQ";
import OurServices from "../../components/Home/OurServices/OurServices";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>

            <AboutUs></AboutUs>

            <OurServices></OurServices>
            
            <FAQ></FAQ>
            
           
        </div>
    );
};

export default HomePage;