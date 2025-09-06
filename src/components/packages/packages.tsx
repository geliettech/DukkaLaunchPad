import {useEffect, useState} from 'react'
import PackagesData from "../../data/data"
import Button from "../btn"
import {motion} from "framer-motion";
import { SlideBottom } from "../../utility/animation";
 
 
const Packages = () => {
const [packages, setPackages] = useState<any[]>([])
    
 // useEffect to fetch Packages 
 useEffect(() => {
    try {
        // Simulate "fetching" from a local source
        setPackages(PackagesData); // Set local data
        console.log(PackagesData)
      } catch (error) {
        console.error("Error loading file:", error);
      } 
 }, [])

  return (
    <motion.div variants={SlideBottom(0.2)}
              initial="initial"
              animate="animate" className="container bg-[url('/hero-section/background-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="md:py-26 py-24 ">
            <h1 className="capitalize font-semibold text-3xl text-center md:text-left mb-8">
                all packages
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="space-y-8 bg-ghostWhite shadow-md rounded-xl px-16 py-6">
                        <div>
                            <img src={pkg.PkgImg} alt={pkg.title} className="h-auto w-full object-contain max-h-[455.55px] max-w-[526.802px]" />
                        </div>
                        <div className="space-y-8">
                            <h4 className="capitalize font-semibold text-2xl text-charcoal">
                                {pkg.title}({pkg.price})
                            </h4>
                            <Button text="Learn More" to={`/Packages/${pkg.title}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Packages