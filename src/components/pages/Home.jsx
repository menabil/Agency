import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Banner from "../layouts/Banner";
import Success from "../layouts/Success";
import Service from "../layouts/Service";
import Work from "../layouts/Work";
import Why from "../layouts/Why";
import Review from "../layouts/Review";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Success />
      <Service />
      <Work />
      <Why />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
