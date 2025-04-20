import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center text-sm text-gray-600 py-6 mt-8">
      <nav className="mb-2 space-x-4">
        <Link
          to="/"
          className="hover:underline text-green-800 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline text-green-800 font-medium transition-colors"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="hover:underline text-green-800 font-medium transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="hover:underline text-green-800 font-medium transition-colors"
        >
          Contact Me
        </Link>
      </nav>

      <p>
        © {new Date().getFullYear()} My Personal Portfolio – Stephanie Burbank.
      </p>
      <p className="mt-1">Built using React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
