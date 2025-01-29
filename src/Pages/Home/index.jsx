import HomeBestSeller from "../../Components/HomePage/HomeBestSeller"
import HomeProductsAll from "../../Components/HomePage/HomeProductAll"
import HomeWhyChooseUs from "../../Components/HomePage/HomeWhyChooseUs"
import ProductCarousel from "../../Components/HomePage/ProductCarousel"
import CategorySlider from "../../Elements/CategoriesSlider"
import HomeCarousel from "../../Elements/HomeCarousel"
import LayoutEl from "../../Shared/LayoutEl"


const Home=()=>{
    return (
        <>
         <LayoutEl>
            <CategorySlider/>
            <HomeCarousel/>
            <HomeBestSeller/>
            <ProductCarousel/>
            <HomeWhyChooseUs/>
            <HomeProductsAll/>
           
         </LayoutEl>
        
        </>
    )
}
export default Home