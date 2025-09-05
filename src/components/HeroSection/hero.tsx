import HeroSectionImg from "/hero-section/launchpad-1.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import Button from "../btn";

const HeroSection = () => {
  return (
    <>
      <div className="container bg-[url('/hero-section/background-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Text Content Section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-30 md:py-0 md:px-0 md:items-start order-2 md:order-1">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl xl:text-5xl font-bold"
            >
              <span className="text-lightcoral flex flex-col">Dukka</span>
              Launchpad
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
            >
              The easiest, fastest, and most secure way for you to launch,
              register and grow your business in Nigeria.
            </motion.p>
            <Button text="View Packages" to="#packages" />
          </div>
          {/* Hero image Section */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ opacity: 1, x: 0 }}
              src={HeroSectionImg}
              className="w-full max-w-[978px] h-auto object-contain"
              alt="launchpad 1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
