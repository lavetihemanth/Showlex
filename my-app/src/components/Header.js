import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO, USER_AVATAR } from "../utils/constants";
import { IoClose, IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {

  const [showLinks, setShowLinks] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {})
          .catch((error) => {
            navigate("/error");
          });
        setShowLinks(!showLinks);
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({
                uid: uid,
                email: email, 
                displayName: displayName,
                photoURL: photoURL,
              })
             );
              if (location.pathname === "/") {
              navigate("/browse");
              } else {
                navigate(location.pathname);
              }
            } else {
              dispatch(removeUser());
              navigate("/");
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate, location.pathname]);

    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };

    const handleHomeClick = () => {
      navigate("/browse");
      setShowLinks(!showLinks);
    }

    return  (
        <section className={`max-w-full xl:max-w-[1351px] mx-auto fixed top-0 z-30 w-full overflow-x-hidden ${user ? 'md:backdrop-blur-md' : ''} flex flex-col md:flex-row md:justify-between m-0`}>
          <div className={`w-full md:w-auto flex items-center justify-between ${user ? 'backdrop-blur-md' : ''}`}>
            <img className="w-40 h-12 mt-2 pl-4"
               src = {APP_LOGO}
               alt = "netflix logo"
            />
            {user && (
              <div className="md:hidden flex items-center">
                <Link to="search">
                  <span className="pr-2 flex items-center justify-center text-xl cursor-pointer text-white"><CiSearch /></span>
                </Link>
                <button className='pr-4 text-xl cursor-pointer text-white' onClick={toggleLinks}>
                    {showLinks ? <IoClose /> : <IoMenu />}
                </button>
              </div>
            )}
          </div>
            {user && (
              <ul className={`nav-content md:flex md:items-center md:gap-x-4 w-full pt-3 p-2 md:pr-4 text-white overflow-x-hidden relative left-0 md:static md:z-30 z-[-1] md:w-auto transition-all duration-700 ease-in ${showLinks ? 'top-0 backdrop-blur-md opacity-100' : 'top-[-200px]'} opacity-0 md:opacity-100`}>
                <li className="hidden md:flex md:items-center py-0 md:pr-2 text-white">
                  <Link to="search">
                    <span className="md:flex md:items-center md:justify-center text-2xl cursor-pointer"><CiSearch /></span>
                  </Link>
                </li>
                <li className="pl-4 md:pl-0 py-1 md:py-0">
                  <button className="rounded-sm bg-red-600 hover:bg-opacity-80 py-1 px-2"
                          onClick={handleHomeClick}
                  >
                    Home
                  </button>
                </li>
                <li className="pl-4 md:pl-0 py-1 md:py-0 flex justify-start">
                  <div className="flex flex-row justify-between items-center gap-x-1">
                    <img className="rounded-sm h-8 w-8"
                       src = {USER_AVATAR}
                       alt="usericon"
                    />
                    
                    <button 
                       className="bg-gray-600 text-white py-1 px-2 bg-opacity-70
                       hover:bg-opacity-40 rounded-sm flex items-center"
                       onClick={handleSignOut}
                    >
                        Logout
                    </button>
                    
                  </div>
                </li>
                </ul>
              )}
        </section>
    );
};
export default Header;