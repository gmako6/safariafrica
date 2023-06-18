import React from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <span className="text-lg font-bold">Tanzania Trails</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/destinations">
              <span className="hover:text-gray-300">Destinations</span>
            </Link>
          </li>
          <li>
            <Link href="/tours">
              <span className="hover:text-gray-300">Tours</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="hover:text-gray-300">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-gray-300">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-300">Contact</span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full py-2 px-4 focus:outline-none"
            />
            {/* Add additional styling as needed */}
          </div>
          <div>
            <Link href="/tailor-made">
              <span className="bg-white text-blue-500 hover:bg-blue-200 px-4 py-2 rounded-full">
                Tailor-made
              </span>
            </Link>
          </div>
          <div>
            <Link href="/dashboard" className=" ">
              <FiUser
                size={20}
                className="p-1 rounded-full bg-white text-blue-500 flex items-center justify-center"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
