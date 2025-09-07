import Button from "../btn";

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal py-8">
      <div className="container mx-auto x-axis-padding">
        {/* news letter */}
        <div className="mb-8 text-center space-y-4">
          <h2 className="text-ghostWhite">
            Be Part of Our Community: Sign Up for Our News
          </h2>
          <div className="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
              className="bg-thistle"
            />
            <Button className="bg-lightcoral" text="Subscribe" to="" />
          </div>
        </div>
        {/* menu */}
        <div className="flex justify-between align-center">
          <div className="">
            <div className="text-ghostWhite">Logo</div>
            <div className="text-ghostWhite">social icons</div>
          </div>
          <div className="text-ghostWhite">menu</div>
        </div>
        {/* copy right */}
        <div>
          <p className="text-ghostWhite text-center">
            Copyright&copy; 2025 Dukka Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
