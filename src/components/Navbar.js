import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-black bg-gradient-to-r from-black to-gray-900 md:">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Enigma</span>
          </a>
          <div className="md:flex md:items-center md:ml-auto">
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <nav
              className={`md:ml-auto md:mr-auto flex flex-col md:flex-row ${
                menuOpen ? "block" : "hidden md:flex"
              }`}
            >
              <a className="md:mr-5 text-white text-lg hover:text-gray-100 hover:bg-yellow-700">
                <b>Residencies</b>
              </a>
              <a className="md:mr-5 text-white hover:text-gray-100 hover:bg-yellow-700">
                <b>Our Values</b>
              </a>
              <a className="md:mr-5 text-white hover:text-gray-100 hover:bg-yellow-700">
                <b>Contact Us</b>
              </a>
              </nav>
            <button className="hidden md:inline-flex items-center text-white bg-blue-900 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-800 rounded text-base md:mt-0">
              <b>Contact</b>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
