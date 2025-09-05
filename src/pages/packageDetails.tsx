import { useParams } from "react-router";
import { useEffect, useState } from "react";
import PackagesData from "../components/packages/data";
import { motion } from "framer-motion";
import { SlideBottom } from "../utility/animation";

const PackageDetails = () => {
  const { title } = useParams<{ title: string }>();
  const [pkg, setPkg] = useState<any | null>(null);

  useEffect(() => {
    // find the matching package by title
    const foundPackage = PackagesData.find(
      (item) => item.title.toLowerCase() === title?.toLowerCase()
    );
    setPkg(foundPackage || null);
  }, [title]);

  if (!pkg) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Package not found 🚫</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={SlideBottom(0.2)}
      initial="initial"
      animate="animate"
      className="container py-16"
    >
      <div className="bg-ghostWhite shadow-lg rounded-xl p-8 md:p-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={pkg.PkgImg}
              alt={pkg.title}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            <h1 className="capitalize font-bold text-3xl text-charcoal">
              {pkg.title}
            </h1>
            <p className="text-xl font-semibold text-gray-700">
              Price: <span className="text-primary">{pkg.price}</span>
            </p>
            <p className="text-gray-600 leading-relaxed">{pkg.description}</p>

            {/* Features (optional, if data includes features) */}
            {pkg.features && (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {pkg.features.map((feature: string, idx: number) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageDetails;
