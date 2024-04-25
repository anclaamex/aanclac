import HeroSlider from "../components/HeroSlider/HeroSlider";
import Acreditacion from "../components/Acreditacion/Acreditacion";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Mapa from "../components/Mapa/Mapa";
import Contacto from "../components/Contacto/Contacto";
import Servicios from "../components/Servicios/Servicios";
import PageTitleBox from "../components/PageTitleBox/PageTitleBox";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <Acreditacion />
      <ShopCategories />
      <PageTitleBox />
      <Servicios />
      {/* <FeaturedProducts /> */}
      <Mapa />
      <Contacto />
    </>
  );
}
