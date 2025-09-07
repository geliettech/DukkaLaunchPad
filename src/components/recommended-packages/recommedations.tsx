import React from "react";
import PackagesData from "../../data/data";
import { motion } from "framer-motion";
import { SlideBottom } from "../../utility/animation";
import Button from "../btn";

const RecommendedPackages: React.FC = () => {
  // Filter only gold, platinum, and ruby
  const filteredPackages = PackagesData.filter((filterPkg) =>
    ["gold", "platinum", "ruby"].includes(filterPkg.title.toLowerCase())
  );

  return (
    <motion.section
      variants={SlideBottom(0.2)}
      initial="initial"
      animate="animate"
      className=""
    >
      <div className="container mx-auto x-axis-padding">
        <h1 className="capitalize font-semibold text-2xl md:text-3xl text-center md:text-left mb-4">
          Recommended Services
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          {filteredPackages.map((filteredPkg) => (
            <div
              key={filteredPkg.id}
              className="space-y-8 bg-ghostWhite px-12 py-8 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={filteredPkg.PkgImg}
                alt={filteredPkg.title}
                className="h-auto w-full object-contain max-h-[455.55px] max-w-[526.802px]"
              />
              <h2 className="capitalize font-semibold text-lg md:text-xl">
                {filteredPkg.title.toUpperCase()} ({filteredPkg.price})
              </h2>
              <Button
                className=""
                text="Learn More"
                to={`/Packages/${filteredPkg.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RecommendedPackages;
