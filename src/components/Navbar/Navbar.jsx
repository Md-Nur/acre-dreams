import { IoMdMenu } from "react-icons/io";
import MyNavLinks from "./MyNavLinks";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import NavAvatar from "./NavAvatar";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu />
          </div>
          <MyNavLinks
            myClasses="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            tabIndex={0}
          />
        </div>
        <NavLink to="/" className="btn btn-ghost text-3xl font-bold">
          Acre Dreams
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <MyNavLinks myClasses="menu menu-horizontal px-1" tabIndex={null} />
      </div>
      <div className="navbar-end mx-5">
        <NavAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
