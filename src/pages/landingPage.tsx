import HeroSection from "../components/hero-section/hero";
import Terminal from "../components/terminal/terminal";
import Packages from "../components/packages/packages";
import RecommendedPackages from "../components/recommended-packages/recommedations";

const LandingPage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="bg-[url('/hero-section/background-1.png')] bg-cover bg-center bg-no-repeat py-32 space-y-32">
        <RecommendedPackages />
        <Packages />
        <Terminal />
      </div>
    </div>
  );
};

export default LandingPage;
