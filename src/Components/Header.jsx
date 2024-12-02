import React, { useState } from 'react';
import 'flowbite';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section>
        {/* Navbar */}
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isSidebarOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

          </div>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 w-64 h-full bg-gray-800 text-white transform transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <h2 className="text-lg font-bold">Sidebar Menu</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
