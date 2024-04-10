import React from "react";
import { useUserAuth } from "../../contexts/UserAuthProvider";

const NavAvatar = () => {
  const { user, loading } = useUserAuth();
  console.log("In avatars", loading);

  if (loading) return <div className="w-12 skeleton mask mask-squircle"></div>;

  return (
    <div
      className="tooltip tooltip-left"
      data-tip={user?.displayName || "User Name"}
    >
      <div className="avatar">
        <div className="w-12 mask mask-squircle">
          <img
            src={
              (!loading && user?.photoURL) ||
              "https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NavAvatar;
