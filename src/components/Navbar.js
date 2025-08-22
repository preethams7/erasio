import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Call hook at the top of the component

  const handleLogout = () => {
    // you can also clear session storage/localStorage here if needed
    navigate("/");
  };

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.jpg" alt="Erasio" className="w-8 h-8 rounded" />
        <div>
          <h1 className="text-lg font-bold text-gray-900">Erasio</h1>
          <p className="text-xs text-gray-500">Student Portal</p>
        </div>
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center space-x-6 relative">
        {/* Notifications */}
        <div className="relative">
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
          <button className="text-gray-600 hover:text-gray-900">🔔</button>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="flex flex-col items-end text-right">
              <p className="text-sm font-semibold text-gray-800">Preetham S</p>
              <p className="text-xs text-gray-500">Balance: $580.75</p>
            </div>
            <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center font-bold">
              P
            </div>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border z-50">
              <div className="p-4 border-b">
                <p className="font-semibold text-gray-800">Preetham S</p>
                <p className="text-xs text-gray-500">ID: E22345</p>
              </div>
              <div className="p-4 space-y-3 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <span>🆔</span>
                  <p>Reg Number: REG2023-8765</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📅</span>
                  <p>Enrolled: 2023</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💳</span>
                  <p>Balance: $580.75</p>
                </div>
              </div>
              <div className="border-t">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  ⚙️ Account Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  🚪 Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
