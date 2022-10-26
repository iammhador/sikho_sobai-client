import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context.js/Context";
import avater from "../Assets/batman.png";
const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="my-10">
      <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
        <img
          class="object-cover w-full h-56"
          src={user?.photoURL ? user?.photoURL : avater}
          alt="avatar"
        />

        <div class="py-5 text-center">
          <p
            class="block text-2xl font-bold text-gray-800 dark:text-white"
            tabindex="0"
            role="link"
          >
            {user && user?.displayName ? user?.displayName : user?.email}
          </p>
          <span class="text-xs text-gray-700 dark:text-gray-200">
            {user.uid}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
