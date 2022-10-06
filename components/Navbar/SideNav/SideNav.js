import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signOutUser } from "redux/reducers/authSlice";
import Image from "next/image";
import HomeIcon from "public/assets/icon-nav-home.svg";
import MoviesIcon from "public/assets/icon-nav-movies.svg";
import TvIcon from "public/assets/icon-nav-tv-series.svg";
import BookmarkedIcon from "public/assets/icon-nav-bookmark.svg";
import SideNavItem from "./SideNavItem";

function SideNav() {
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
    <div className="bg-semiDarkBlue  py-9 px-8 m-8 rounded-3xl fixed  inset-y-0 transform -translate-x-32  lg:translate-x-0 transition duration-200 ease-in-out">
      <div className="relative h-full flex flex-col items-center">
        <div className="group mb-[72px]">
          <svg
            width="32"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:cursor-pointer"
          >
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </div>
        <nav>
          <ul className="flex  flex-col">
            <SideNavItem
              path="/"
              index={0}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="home"
              Icon={HomeIcon}
            />
            <SideNavItem
              path="/movies"
              index={1}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="movies"
              Icon={MoviesIcon}
            />
            <SideNavItem
              path="/tv-series"
              index={2}
              selectedIndex={selectedIndex}
              handleSelect={handleSelectedIndex}
              src="/assets/icon-nav-home.svg"
              alt="tv-series"
              Icon={TvIcon}
            />
            <SideNavItem
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
        <div className="absolute bottom-0">
          <div className="relative  w-10 h-10  rounded-full border border-white">
            <Image src="/assets/image-avatar.png" layout="fill" alt="avatar" />
          </div>
          <div
            className="flex justify-center mt-10 cursor-pointer group"
            onClick={() => dispatch(signOutUser())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-10 h-10 stroke-current  text-white/50 group-hover:text-white"
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
    </div>
  );
}

export default SideNav;
