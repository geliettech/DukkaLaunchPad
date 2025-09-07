import Logo from "../logo";
import NavBar from "../navBar";
import Cart from "../cart";
import { motion } from "framer-motion";
import { SlideBottom } from "../../utility/animation";

const Header: React.FC = () => {
  return (
    <header>
      <motion.div
        variants={SlideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="container mx-auto x-axis-padding flex justify-between items-center py-4"
      >
        {/* Logo section */}
        <Logo to="/" />
        {/* Links section */}
        <div className="md:block hidden">
          <NavBar />
        </div>

        {/* Cart section */}
        <Cart />
      </motion.div>
    </header>
  );
};

export default Header;
