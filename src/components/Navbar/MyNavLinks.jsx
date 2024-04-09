import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLinks = ({ myClasses, tabIndex }) => {
  return (
    <ul tabIndex={tabIndex} className={myClasses}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
      {true ? (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
        </>
      ) : (
        <li>
          <button onClick={() => console.log("Log out")}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default MyNavLinks;
