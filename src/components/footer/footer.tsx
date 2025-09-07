import Button from "../btn";
import FooterLogo from "/footerlogo.png";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal pt-26 pb-6">
      <div className="container mx-auto x-axis-padding flex flex-col gap-18">
        {/* news letter */}
        <div className="text-center space-y-9">
          <h2 className="text-ghostWhite text-2xl md:text-4xl font-medium md:font-medium">
            Be Part of Our Community: Sign Up for Our News
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
              className="bg-[#6C5D5E] rounded px-4 py-2 text-ghostWhite w-full md:w-[724.571px] min-h-[50.857px] focus:outline-none"
            />
            <Button className="bg-lightcoral w-[40%] md:w-auto" text="Subscribe" to="" />
          </div>
        </div>
        {/* menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 space-y-8 md:space-y-0">
          <div className="text-ghostWhite">
            <Link to="/">
              <img src={FooterLogo} alt="logo" className="w-[34px] h-[34px]" />
            </Link>
            <div className="flex space-x-4">
              <Link to="#">X</Link>
              <Link to="#">Ig</Link>
              <Link to="#">Li</Link>
            </div>
          </div>
          <div className="text-ghostWhite flex flex-col space-y-2">
            <h4 className="text-ghostWhite">Company</h4>
            <Link to="">About</Link>
            <Link to="">Contact us</Link>
            <Link to="">Ambassadors</Link>
            <Link to="">Partners</Link>
            <Link to="">Career</Link>
            <Link to="">Loans</Link>
          </div>
          <div className="text-ghostWhite flex flex-col space-y-2">
            <h4 className="text-ghostWhite">Legal</h4>
            <Link to="">Terms</Link>
            <Link to="">Balance T & C</Link>
            <Link to="">Terminals T & C</Link>
            <Link to="">Privacy</Link>
            <Link to="">Product Manual</Link>
          </div>
        </div>
        {/* copy right */}
        <div className="text-center">
          <p className="text-ghostWhite text-sm font-light">
            Copyright&copy; 2025 Dukka Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
