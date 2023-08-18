import { FC } from 'react';

export const  NavBar: FC = () => {
    return (
        <nav className="bg-blue-950 p-4 sticky">
        <div className="container">
          <div className="flex justify-between gap-5 items-center text-white font-bold text-xl">
            <a href="#">HESHOP</a>
            <input 
            className='border border-gray-400 rounded-md px-4 h-6 w-full flex-shrink flex-grow placeholder-gray-400 placeholder-opacity-50 text-xs text-slate-950' 
            type="text" name="" id=""
            placeholder="What are you looking for?" />
            <div className="hidden sm:flex space-x-4">
              <a className='text-base' href="#home">Home</a>
              <a className='text-base' href="#shop">Shop</a>
              <a className='text-base' href="#cart">Cart</a>
              <a className='text-base' href="#profile">Profile</a>
            </div>
            <div className="sm:hidden">
              {/* Mobile menu button */}
              <button
                className="text-white focus:outline-none"
                aria-label="Open Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}