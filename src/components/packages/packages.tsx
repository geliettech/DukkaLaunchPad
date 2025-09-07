import { useEffect, useState } from "react";
import PackagesData from "../../data/data";
import Button from "../btn";
import { motion } from "framer-motion";
import { SlideBottom } from "../../utility/animation";

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<any[]>([]);

  // useEffect to fetch Packages
  useEffect(() => {
    try {
      // Simulate "fetching" from a local source
      setPackages(PackagesData); // Set local data
      console.log(PackagesData);
    } catch (error) {
      console.error("Error loading file:", error);
    }
  }, []);

  return (
    <motion.section
      variants={SlideBottom(0.2)}
      initial="initial"
      animate="animate"
      className=""
    >
      <div className="container mx-auto x-axis-padding">
        <h1 className="capitalize font-semibold text-2xl md:text-3xl text-center md:text-left  mb-4">
          all packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-26">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="space-y-8 bg-ghostWhite px-12 py-8 rounded-xl shadow-lg overflow-hidden"
            >
                <img
                  src={pkg.PkgImg}
                  alt={pkg.title}
                  className="h-auto w-full object-contain max-h-[455.55px] max-w-[526.802px]"
                />
                <h2 className="capitalize font-semibold text-lg md:text-xl">
                  {pkg.title}({pkg.price})
                </h2>
                <Button
                  className=""
                  text="Learn More"
                  to={`/Packages/${pkg.title}`}
                />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Packages;
