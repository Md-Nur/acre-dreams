import { IoMdMenu } from "react-icons/io";
import MyNavLinks from "./MyNavLinks";
import { NavLink } from "react-router-dom";

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
        <div className="tooltip tooltip-bottom" data-tip="User Name">
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
