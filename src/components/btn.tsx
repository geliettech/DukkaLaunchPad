import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { Link } from "react-router";

// Define props with TypeScript interface
interface ButtonProps {
  text: string;
  className?: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, to }) => {
  return (
    <motion.button
      variants={SlideUp(0.2)}
      initial="initial"
      animate="animate"
      className={`primary-btn ${className || ""}`}
    >
      <Link to={to || "#"}>{text}</Link>
    </motion.button>
  );
};

export default Button;
