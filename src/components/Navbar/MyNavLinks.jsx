import React from "react";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const MyNavLinks = ({ myClasses, tabIndex }) => {
  const { user, setLoading } = useUserAuth();
  return (
    <ul tabIndex={tabIndex} className={myClasses}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
      {!user ? (
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
          <button
            onClick={() => {
              signOut(auth);
              setLoading(true);
            }}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  );
};

export default MyNavLinks;
