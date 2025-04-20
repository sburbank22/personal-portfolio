import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
   <div className="text-xl font-bold text-green-800 pl-4 border-l-4 border-green-600">
  My Personal Portfolio
</div>
      <ul className="flex items-center text-green-800 font-medium divide-x divide-green-600">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/projects", label: "Projects" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }, index) => (
          <li key={label} className="px-5 first:pl-0 last:pr-0">
            <Link
              to={to}
              className="hover:text-green-600 hover:underline transition-colors duration-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
