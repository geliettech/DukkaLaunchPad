import logo from "/hero-section/launchpad-1.png";
import cart from "/hero-section/Vector.svg";
import {motion} from "framer-motion";
import { SlideBottom } from "../../utility/animation";
import { Link } from "react-router";


const NavBarLinks = [
  {
    id: 1,
    title: "Home",
    Link: "/",
  },
  {
    id: 2,
    title: "About",
    Link: "#",
  },
  {
    id: 3,
    title: "FAQ",
    Link: "#",
  },
  {
    id: 4,
    title: "Contact",
    Link: "#",
  },
  {
    id: 5,
    title: "Career",
    Link: "#",
  },
  {
    id: 6,
    title: "Blog",
    Link: "#",
  },
  {
    id: 7,
    title: "LaunchPad",
    Link: "/Packages",
  },
];

const NavBar = () => {
  return (
    <motion.div variants={SlideBottom(0.2)}
              initial="initial"
              animate="animate" className="container py-4 flex justify-between items-center">
      {/* Logo section */}
      <div>
        <img src={logo} alt="logo" className="w-[70px]" />
      </div>
      {/* Links section */}
      <div className="md:block hidden">
         {/* <div className=""> */}
        <ul className="flex gap-3 xl:gap-7">
        {NavBarLinks.map((link) => (
          <li key={link.id} >
            <Link to={link.Link} className="hover:text-lightcoral transition duration-300 text-sm xl:text-base">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      </div>
      
      {/* Cart section */}
      <div>
        <img src={cart} alt="logo" className="w-[24px] h-[24px]" />
      </div>
    </motion.div>
  );
};

export default NavBar;
