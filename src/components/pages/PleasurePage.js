import CatalogInfo from "../catalogInfo/CatalogInfo";
import CatalogList from "../catalogList/CatalogList";

import PleasureIntro from "../pleasureIntro/PleasureIntro";
import pleasureImage from "../../resources/img/catalogInfo/info-2.jpg";

const PleasurePage = ({onProduct}) => {

    return (
        <>
            <PleasureIntro/>
            <CatalogInfo title='block' image={pleasureImage}/>
            <CatalogList onProduct={onProduct}/>
        </>
    );
}

export default PleasurePage;