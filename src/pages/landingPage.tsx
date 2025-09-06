import HeroSection from "../components/hero-section/hero";
import NewsLetter from "../components/new-letter/news-letter";
import Packages from "../components/packages/packages";
import RecommendedPackages from "../components/recommended-packages/recommedations";

const LandingPage = () => {
  return (
    <div className="space-y-20">
      <HeroSection />
      <RecommendedPackages />
      <Packages />
      <NewsLetter />
    </div>
  );
};

export default LandingPage;
