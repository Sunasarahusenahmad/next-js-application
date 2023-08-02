import CategoryWisePost from "./components/CategoryWisePost";
import Crousel from "./components/Crousel";
import FetchShimmerFlag from "./components/FetchShimmerFlag";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PopularPostandRecentPost from "./components/PopularPostandRecentPost";

export default function Home() {
  return (
    <>
      <Navbar />
      <Crousel />
      <PopularPostandRecentPost />
      <CategoryWisePost />
      <Footer />
    </>
  );
}
