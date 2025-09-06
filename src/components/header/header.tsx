import Logo from "../logo";
import NavBar from "../navBar";
import Cart from "../cart";
import { motion } from "framer-motion";
import { SlideBottom } from "../../utility/animation";

const Header = () => {
  return (
    <motion.div
      variants={SlideBottom(0.2)}
      initial="initial"
      animate="animate"
      className="container py-4 flex justify-between items-center"
    >
      {/* Logo section */}
      <Logo />
      {/* Links section */}
      <div className="md:block hidden">
        <NavBar />
      </div>

      {/* Cart section */}
      <Cart />
    </motion.div>
  );
};

export default Header;
