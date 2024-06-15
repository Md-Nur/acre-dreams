import Slider from "../components/Slider/Slider";
import Estates from "../components/Estates/Estates";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <section className="w-full">
      <Helmet>
        <title>{`Home || Acre Dreams`} </title>
      </Helmet>
      <Slider />
      <Estates />
    </section>
  );
};

export default Home;
