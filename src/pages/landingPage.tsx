import HeroSection from "../components/hero-section/hero";
import NewsLetter from "../components/news-letter/news-letter";
import Packages from "../components/packages/packages";
import RecommendedPackages from "../components/recommended-packages/recommedations";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <RecommendedPackages />
      <Packages />
      <NewsLetter />
    </>
  );
};

export default LandingPage;
