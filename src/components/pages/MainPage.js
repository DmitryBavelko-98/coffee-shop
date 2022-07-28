
import MainIntro from "../mainIntro/MainIntro";
import OurBest from "../ourBest/OurBest";
import AboutUs from "../aboutUs/AboutUs";

const MainPage = ({data}) => {
    return (
        <>
            <MainIntro/>
            <AboutUs/>
            <OurBest data={data.slice(0, 3)}/>
        </>
    )
}

export default MainPage;