import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signOutUser } from "redux/reducers/authSlice";
import Image from "next/image";

import HomeIcon from "public/assets/icon-nav-home.svg";
import MoviesIcon from "public/assets/icon-nav-movies.svg";
import TvIcon from "public/assets/icon-nav-tv-series.svg";
import BookmarkedIcon from "public/assets/icon-nav-bookmark.svg";
import NavItem from "./NavItem";

function Navbar() {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const router = useRouter();
  const { pathname } = router;

  const handleSelectedIndex = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (pathname === "/") {
      setSelectedIndex(0);
    } else if (pathname === "/movies") {
      setSelectedIndex(1);
    } else if (pathname === "/tv-series") {
      setSelectedIndex(2);
    } else if (pathname === "/bookmarked") {
      setSelectedIndex(3);
    } else if (pathname === "/profile") {
      setSelectedIndex(4);
    }
  }, [selectedIndex, pathname]);
  return (
    <header className="bg-semiDarkBlue py-[18px] px-4 md:m-6 md:rounded-md lg:hidden">
      <div className="flex justify-between items-center">
        <div>
          <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </div>
        <nav>
          <ul className="flex items-center justify-center space-x-6">
            {/* <li className="mr-6">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-5 h-5 text-grayishBlue hover:fill-current hover:text-white group-hover:cursor-pointer transition-all duration-200 ease-in"
                >
                  <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
                </svg>
              </Link>
            </li> */}
            <NavItem
              path="/"
              index={0}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="home"
              Icon={HomeIcon}
            />
            <NavItem
              path="/movies"
              index={1}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="movies"
              Icon={MoviesIcon}
            />
            <NavItem
              path="/tv-series"
              index={2}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="tv-series"
              Icon={TvIcon}
            />
            <NavItem
              path="/bookmarked"
              index={3}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="bookmarked"
              Icon={BookmarkedIcon}
            />
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative w-6 h-6  rounded-full border border-white">
            <Image src="/assets/image-avatar.png" layout="fill" alt="avatar" />
          </div>
          <div className="" onClick={() => dispatch(signOutUser())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-6 h-6 stroke-current  text-white group-hover:text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
