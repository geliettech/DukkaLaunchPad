import { NavLink, Outlet, useParams } from "react-router";


const Layout = () => {
  const { title } = useParams(); // get :title from the route

  const steps = [
    {
      path: `/Packages/${title}/form/business-details`,
      label: "Business Details",
    },
    {
      path: `/Packages/${title}/form/contact-details`,
      label: "Contact Details",
    },
    { path: `/Packages/${title}/form/attach-catalog`, label: "Attach Catalog" },
    {
      path: `/Packages/${title}/form/business-registration`,
      label: "Business Registration",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto md:min-h-screen">
      {/* Sidebar */}
      <aside className="bg-ghostWhite p-6 w-full md:w-1/4">
        <ul className="flex flex-row md:flex-col justify-center gap-8">
          {steps.map((step, index) => (
            <li key={index}>
              <NavLink
                to={step.path}
                className={({ isActive }) =>
                  `flex align-center gap-4 ${
                    isActive ? "text-lightcoral" : "text-inactiveGray"
                  }`
                }
              >
                <span
                  className={`w-6 h-6 text-center border rounded-[50%] isActive? "border-lightcoral" : "border-inactiveGray"`}
                >
                  {index + 1}
                </span>
                <span className="hidden md:flex">
                  {step.label.toUpperCase()}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      {/* Main Content: form */}
      <section className="bg-aliceBlue flex-1 p-10">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
