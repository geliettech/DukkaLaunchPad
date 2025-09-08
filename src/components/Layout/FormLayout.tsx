import { NavLink, Outlet } from "react-router";

const steps = [
  { path: "/business-details", label: "Business Details" },
  { path: "/contact-details", label: "Contact Details" },
  { path: "/attach-catalog", label: "Attach Catalog" },
  { path: "/business-registration", label: "Business Registration" },
];

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r p-6">
        <ul className="space-y-6 text-sm font-medium">
          {steps.map((step, index) => (
            <li key={index}>
              <NavLink
                to={step.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive ? "text-red-500" : "text-gray-400"
                  }`
                }
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                    window.location.pathname === step.path
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                >
                  {index + 1}
                </span>
                {step.label.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
