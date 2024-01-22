import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

function SignIn() {
  return (
    <div
      className={`p-3 drop-shadow-md dark:bg-neutral-800 bg-neutral-200 rounded-lg mb-5 `}
    >
      <p className="text-sm mb-1 font-bold">Sign in</p>
      <div className="flex">
        <button
          aria-label="Sign in with Github"
          className="text-sm bg-[#2f3338] hover:bg-[#4f5257] items-center flex font-bold text-white dark:text-white px-2 py-2 rounded-lg duration-100"
        >
          <BsGithub />
          &thinsp;Github
        </button>
        <button
          aria-label="Sign in with google"
          className="text-sm bg-blue-600 hover:bg-blue-700 items-center flex font-bold text-white dark:text-white px-2 py-2 rounded-lg duration-100 ml-2"
        >
          <BsGoogle />
          &thinsp;Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
