import { NavLink } from "react-router";

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
    Link: "#",
  },
];

const NavBar = () => {
  return (
    <ul className="flex gap-3 xl:gap-7">
      {NavBarLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.Link}
            className="hover:text-lightcoral transition duration-300 text-sm xl:text-base"
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
