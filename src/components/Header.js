// import { SUPPORTED_LANGUAGUES, img_url } from "../utils/constants";
// import { auth } from "../utils/firebase";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { notify } from "../utils/constants";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useEffect, useRef } from "react";
// import { addUser, removeUser } from "../utils/userSlice";
// import { toggleGptSearchView } from "../utils/gptSlice";
// import { changeLanguage } from "../utils/configSlice";

// function Header() {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   //useRef hook to take the selection tag value
//   const selectedLang = useRef(null);

//   // subscribe to the user store
//   const user = useSelector((store) => store.user);

//   const gptToggle = useSelector((store) => store.gpt);

//   const handleSiginOut = () => {
//     signOut(auth)
//       .then(() => {
//         notify("Logout Successfully", true);
//       })
//       .catch((error) => {
//         notify("Error while logging Out", false);
//       });
//   };

//   // this is take care of all the naviagtion
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName, photoURL } = user;
//         dispatch(
//           addUser({
//             uid: uid,
//             email: email,
//             displayName: displayName,
//             photoURL: photoURL,
//           })
//         );
//         navigate("/browse");
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });

//     // Unsiubscribe when component unmounts
//     return () => unsubscribe();
//   }, []);

//   //handling gpt search if its true we will show gpt component else the maincontiner and secondary continer
//   const handleGptSearchClick = () => {
//     // toggle the view
//     dispatch(toggleGptSearchView());
//   };

//   const handleLanguageChange = () => {
//     // taking the selected language value from the select tag wich is refering to useRef hook
//     console.log(selectedLang.current.value);

//     // saving the language to redux store
//     dispatch(changeLanguage(selectedLang.current.value));
//   };

//   return user || gptToggle.showGptSearch ? (
//     <div className="absolute top-0 z-10 w-screen bg-gradient-to-b from-black px-8 flex justify-between">
//       <img src={img_url} alt="Logo" className="w-44"></img>
//       {/* if user is present then only load this */}
//       {user && (
//         <div className="flex p-2">
//           <select
//             class="block h-10  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
//             onChange={handleLanguageChange}
//             ref={selectedLang}
//           >
//             {SUPPORTED_LANGUAGUES.map((lang) => (
//               <option
//                 class="bg-slate-400 text-black"
//                 key={lang.identifier}
//                 value={lang.identifier}
//               >
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//           <button
//             className="bg-red-700 w-25 p-2 mx-4 h-10 rounded-md text-white "
//             onClick={handleGptSearchClick}
//           >
//             {gptToggle.showGptSearch ? "Home Page" : "GPT Search"}
//           </button>
//           <img
//             src={user?.photoURL}
//             alt="usericon"
//             className="w-10 h-10 rounded-md"
//           ></img>
//           <div className="ml-4 h-10 text-white mt-2 text-pretty">{user?.displayName}</div>
//           <button
//             className="w-25 p-2 mx-4 h-10 text-white"
//             onClick={handleSiginOut}
//           >
//             SiginOut
//           </button>
//         </div>
//       )}
//     </div>
//   ) : (
//     <div className="absolute z-10 top-0  w-screen bg-gradient-to-b from-black px-8  flex justify-between">
//       <img src={img_url} alt="Logo" className="w-44"></img>
//     </div>
//   );
// }

// export default Header;


import { SUPPORTED_LANGUAGUES, img_url } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { notify } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedLang = useRef(null);
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store.gpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSiginOut = () => {
    signOut(auth)
      .then(() => {
        notify("Logout Successfully", true);
      })
      .catch((error) => {
        notify("Error while logging Out", false);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = () => {
    dispatch(changeLanguage(selectedLang.current.value));
  };

  return user || gptToggle.showGptSearch ? (
    <div className="absolute top-0 z-10 w-screen bg-gradient-to-b from-black px-8 flex justify-between items-center">
      <img src={img_url} alt="Logo" className="w-44"></img>
      {user && (
        <div className="flex items-center space-x-4">
          <select
            className="block h-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
            onChange={handleLanguageChange}
            ref={selectedLang}
          >
            {SUPPORTED_LANGUAGUES.map((lang) => (
              <option
                className="bg-slate-400 text-black"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="bg-red-700 w-25 p-2 mx-4 h-10 rounded-md text-white"
            onClick={handleGptSearchClick}
          >
            {gptToggle.showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div className="flex items-center space-x-4">
            <img src={user?.photoURL} alt="usericon" className="w-10 h-10 rounded-full"></img>
            <div className="text-white">{user?.displayName}</div>
            <button className="w-25 p-2 mx-4 h-10 text-white" onClick={handleSiginOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="absolute z-10 top-0 w-screen bg-gradient-to-b from-black px-8 flex justify-between items-center">
      <img src={img_url} alt="Logo" className="w-44"></img>
    </div>
  );
}

export default Header;
