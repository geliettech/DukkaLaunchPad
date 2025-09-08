import { useParams } from "react-router";
import { useEffect, useState } from "react";
import PackagesData from "../data/data";
import { motion } from "framer-motion";
import { SlideBottom } from "../utility/animation";
import Button from "../components/btn";

const PackageDetails = () => {
  // Extract title parameter from the URL
  const { title } = useParams<{ title: string }>();

  // State variables to store data
  const [pkgDetails, setPkgDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (title) {
      const foundPackage = PackagesData.find(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      );
      setPkgDetails(foundPackage || null);
    }
    setLoading(false); // ✅ done checking
  }, [title]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Loading package...</p>
      </div>
    );
  }

  if (!pkgDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Package not found.</p>
      </div>
    );
  }

  return (
    <motion.section
      variants={SlideBottom(0.2)}
      initial="initial"
      animate="animate"
      className=""
    >
      <div className="py-8 md:py-2 container mx-auto x-axis-padding flex flex-col-reverse md:flex-row items-center justify-center md:justify-between min-h-screen gap-8 md:gap-28">
        {/* Content */}
        <div className="space-y-4">
          <h1 className="capitalize font-bold text-3xl">
            {pkgDetails.title} - {pkgDetails.price}
          </h1>

          {/* Features  */}
          <div className="space-y-4">
            {pkgDetails.features.map((feature: string, idx: number) => (
              <p key={idx}>{feature}</p>
            ))}
          </div>
          <Button className="" text="Get Started" to={""} />
          {/* <Button className="" text="Get Started" to={`/Packages/${pkgDetails.title}/form`} /> */}
        </div>

        {/* Image */}
        <div className="">
          <img
            src={pkgDetails.PkgImg}
            alt={pkgDetails.title}
            className="h-auto w-full object-cover max-h-[602px] max-w-[602px]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PackageDetails;
