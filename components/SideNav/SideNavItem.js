import React from "react";
import Link from "next/link";
import HomeIcon from "public/assets/icon-nav-home.svg";
import Image from "next/image";

function SideNavItem({ index, path, selectedIndex, handleSelect, alt, Icon }) {
  return (
    <li className="mb-10">
      <Link href={path} className="group">
        <a onClick={() => handleSelect(index)}>
          <Icon
            className={`w-5 h-5 ${
              selectedIndex === index ? "text-white" : "text-grayishBlue"
            } hover:text-primaryRed transition duration-200 ease-in`}
          />
        </a>
      </Link>
    </li>
  );
}

export default SideNavItem;
// className={`fill-current w-5 h-5 ${
//   selectedIndex === index ? "text-white" : "text-grayishBlue"
// }  hover:fill-current hover:text-white group-hover:cursor-pointer transition-all duration-200 ease-in`}
