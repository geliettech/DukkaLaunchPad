import Button from "../btn.tsx";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation.tsx";
import TerminalImg from "/terminal/rach-1.png"

const Terminal: React.FC = () => {
  return (
   <section className="container mx-auto x-axis-padding">
       <div className="bg-linear-to-r from-lightcoral to-paleRose bg-cover bg-center bg-no-repeat flex justify-between items-center min-h-[400px] rounded-xl pt-8 px-12">
        {/* Terminal Text */}
        <div className="space-y-5 text-center md:text-left">
         <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-3xl xl:text-5xl font-bold text-ghostWhite"
          >Dukka Terminal<br />powered by Dukka app</motion.h1>
           <motion.p variants={SlideUp(0.5)} initial="initial" animate="animate" className="text-ghostWhite">
            Your inventory management system<br />can now seamlessly communicate with
            your POS
          </motion.p>
          <Button className="" text="Learn More" to="" />
        </div>
        {/* Terminal Image */}
        <div className="hidden md:flex">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
            src={TerminalImg}
            className="w-full max-w-[454px] h-[454px] object-contain"
            alt="launchpad 1"
          />
        </div>
      </div>
    </section>
  );
};

export default Terminal;