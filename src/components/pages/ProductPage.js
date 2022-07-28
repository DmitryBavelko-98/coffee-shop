import CatalogIntro from "../catalogIntro/CatalogIntro";
import CatalogProduct from "../catalogProduct/CatalogProduct";

const ProductPage = ({data}) => {
    return(
        <>
            <CatalogIntro/>
            <CatalogProduct data={data}/>
        </>
    );
}

export default ProductPage;