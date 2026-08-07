import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [loading, setLoading] = useState(false);

  return (
    <>
      {/* Burger Button (Mobile Only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0
          h-screen w-64
          z-40
          bg-gray-900 text-white
          transform transition-transform duration-300
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }
          md:translate-x-0
        `}

        // md:      translate-x-0
// │             │
// │             └── Move the element to its original position
// │
// └── Apply this only when screen width is 768px or more
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Dashboard</h1>

          {/* Close Button (Mobile Only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col p-4 gap-2">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            🏠 Home
          </a>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            👤 Profile
          </a>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            📊 Dashboard
          </a>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            ⚙ Settings
          </a>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            🚪 Logout
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;