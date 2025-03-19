import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({
                uid: uid,
                email: email, 
                displayName: displayName,
                photoURL: photoURL,
            }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
            console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`)
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`)
        });
    }
  };

  return (
    <div className="max-w-full xl:max-w-[1536px] mx-auto my-0 p-0">
      <Header />
      <div className="w-full absolute -z-10">
        <img className="h-screen w-full object-cover"
          src={BG_URL}
          alt="bodyImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-5/6 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-[450px] p-8 md:p-10 my-36 lg:my-24 mx-auto right-0 left-0 
                bg-black text-white bg-opacity-60 rounded"
      >
        <h1 className="font-semibold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full rounded bg-black bg-opacity-70
                    border-none outline-none placeholder:text-sm placeholder-slate-400 focus:placeholder-slate-600"
            ref={name}
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full rounded bg-black bg-opacity-70
                    border-none outline-none placeholder:text-sm placeholder-slate-400 focus:placeholder-slate-600"
          ref={email}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full rounded bg-black bg-opacity-70
                    border-none outline-none placeholder:text-sm placeholder-slate-400 focus:placeholder-slate-600"
          ref={password}
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-red-500 py-2 text-lg">{errorMessage}</p>
        <button
          className="p-2 my-4 w-full rounded bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-slate-400" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          {isSignInForm ? (
            <span
              className="font-semibold text-white cursor-pointer 
                           hover:underline"
            >
              Sign Up Now.
            </span>
          ) : (
            <span
              className="font-semibold text-white cursor-pointer 
                           hover:underline"
            >
              Sign In Now.
            </span>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;