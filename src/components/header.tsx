import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/contacts",
      title: "Contacts",
    },
  ];

  console.log("LOcation: ", location.pathname);

  return (
    <div className="mx-auto flex fixed justify-center w-full gap-5 sm:gap-10 py-5">
      {links.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="group transition duration-300"
        >
          {item.title}
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all ease-out duration-700 h-0.5 bg-primary rounded-full ${
              item.to === location.pathname ? "max-w-full" : ""
            }`}
          />
        </Link>
      ))}
    </div>
  );
};
