import React from "react";
import Link from "next/link";

function NavItem({ index, path, selectedIndex, handleSelect, alt, Icon }) {
  return (
    <li className="">
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

export default NavItem;
