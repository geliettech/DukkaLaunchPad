import Button from "../btn.tsx";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation.tsx";
import TerminalImg from "/terminal/rach-1.png"

const Terminal: React.FC = () => {
  return (
   <section className="bg-lightcoral bg-cover bg-center bg-no-repeat">
       <div className="container mx-auto x-axis-padding flex justify-between items-center min-h-[400px]">
        {/* Terminal Text */}
        <div className="space-y-5 text-center md:text-left">
         <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-4xl xl:text-5xl font-bold"
          >Dukka Terminal powered by Dukka app</motion.h1>
           <motion.p variants={SlideUp(0.5)} initial="initial" animate="animate">
            Your inventory management system can now seamlessly communicate with
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
            className="w-full max-w-[978px] h-auto object-contain"
            alt="launchpad 1"
          />
        </div>
      </div>
    </section>
  );
};

export default Terminal;