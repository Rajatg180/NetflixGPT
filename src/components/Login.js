import React, { useState, useRef } from "react";
import { bg_url, users_icon_url } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { notify } from "../utils/constants";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailData = email.current.value;
    const passwordData = password.current.value;

    const message = checkValidData(emailData, passwordData);

    if (message === "Email ID is not valid") {
      notify("Email ID is not valid", false);
      return;
    }

    if (message === "Password is not valid") {
      notify("Password is not valid", false);
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: users_icon_url,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              notify("Registered Successfully!!", true);
            })
            .catch((error) => {
              notify(error.message, false);
            });
        })
        .catch((error) => {
          notify(error.message, false);
        });
    } else {
      signInWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          notify("Signed In Successfully!!", true);
        })
        .catch((error) => {
          notify(error.message, false);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: `url(${bg_url})` }}></div>
      <div className="hidden md:block absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg_url})` }}></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 md:w-3/12 w-11/12 bg-black bg-opacity-80 rounded-md p-8 text-white"
      >
        <h1 className="text-3xl font-bold pb-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 p-2 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-gray-700 rounded-md"
        />
        <button
          className="my-2 p-3 text-white bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-center cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

