import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState(0);
  const [homeHover, setHomeHover] = useState(false);

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
           transition-transform duration-300
          ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }
          ${
            isOpen ? `bottom-0 transition duration-1000 scale-y-95` : 'duration-1000 scale-y-100 top-0'
          }
          md:translate-0
        `}

        // md:      translate-x-0
// │             │
// │             └── Move the element to its original position
// │
// └── Apply this only when screen width is 768px or more
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex w-screen justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            {/* <h2 className="border p-0.5 rounded bg-red-600 pb-0.5 px-1.5 cursor-pointer
            ">x</h2> */}
            <div className="hidden md:block cursor-pointer duration-500 hover:scale-110 text-xl border rounded bg-red-600 pb-0.5 px-1.5" onClick={() => setIsOpen(v => !v)}>
              <h2 className="">x</h2>
            </div>
          </div>
          
          

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
          <Link to="/homepage" onMouseEnter={() => setHomeHover(true)}
  onMouseLeave={() => setHomeHover(false)} href="#" className="cursor-pointer duration-500 hover:scale-110 hover:bg-gray-700 p-2 " onClick={() => setHomeHover(e => !e)}>🏠 Home</Link>

          {/* <a   onMouseEnter={() => setHomeHover(true)}
  onMouseLeave={() => setHomeHover(false)} href="#" className="cursor-pointer duration-500 hover:scale-110 hover:bg-gray-700 p-2 " onClick={() => setHomeHover(e => !e)}>
            🏠 Home
          </a> */}

          <Link to={'/profilePage'} className="hover:bg-gray-700 p-2 rounded">👤 Profile</Link>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            📊 Dashboard
          </a>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            ⚙ Settings
          </a>

          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            🚪 Logout
          </a>

          {/* <h1 className= {isOpen ? `fixed left-3 top-100 transition duration-500 hover:rotate-180 hover:translate-x-full bg-amber-500 cursor-pointer` : `fixed left-1 top-50 transition duration-500 hover:rotate-x-180 hover:scale-200`}>hello</h1> */}
          <button className="bg-amber-500 text-black rounded w-32 cursor-pointer transition-transform duration-500 hover:scale-110">click</button>
        </nav>

        <div
  className={`
    fixed top-12 left-52 w-max bg-amber-500 p-2 rounded-2xl
    transition-all duration-300 ease-out
    ${
      homeHover
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
    }
  `}
>
  <h1 className="text-black">home is best place</h1>
</div>
      </div>
    </>
  );
};

export default Sidebar;



// Without a transition class, CSS property changes happen instantly (0 milliseconds). Adding a transition class forces the browser to calculate every intermediate frame between the start state and the end state over time—which is what creates the animation.


// hidden → hidden by default
// md:block → becomes visible at md (768px+)
// md:hidden → becomes hidden at md (768px+)