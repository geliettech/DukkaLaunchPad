import logo from "/logo.png";
import { Link } from "react-router";

// Define props with TypeScript interface
interface LogoProps {
  to: string;
}

const Logo: React.FC<LogoProps> = ({ to }) => {
  return (
    <div>
      <Link to={to || "#"}>
        <img src={logo} alt="logo" className="w-[120px]" />
      </Link>
    </div>
  );
};

export default Logo;
