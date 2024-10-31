import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Home</a></li>
              <li><a>Pages to Read</a></li>
              <li><a>Listed Books</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="font-semibold">Home</a></li>
            <li><a className="font-semibold">Listed Books</a></li>
            <li><a className="font-semibold">Pages to Read</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <button className="btn bg-[#23BE0A] text-white hidden md:flex">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white hidden md:flex">sign Up</button>
          <button className="md:hidden flex"><FaBars></FaBars></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
