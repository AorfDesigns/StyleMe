'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaChartLine, FaRuler, FaSignOutAlt, FaTimes } from 'react-icons/fa'; // Importing icons including the close icon
import { MdMessage } from 'react-icons/md'; // Importing message icon
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpenProfile, setDropdownOpenProfile] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownProfile = () => {
    setDropdownOpenProfile(!isDropdownOpenProfile);
  };
  const messageCount = 1;
  return (
    <header className="bg-transparent shadow-md p-4">
      <div className="container flex items-center justify-between lg:justify-start relative">
        {/* Name with Dropdown Arrow */}
        <div
          className="relative flex items-center text-lg font-bold text-black hover:bg-gray-200 hover:text-black p-4 rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          Style_Me
          <IoIosArrowDown className="w-5 h-5 ml-2" aria-hidden="true" />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white border rounded-lg shadow-lg p-4 z-10">
              {/* Close Icon */}
              <button
                onClick={() => setDropdownOpen(false)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:scale-105 transition-transform"
              >
                <FaTimes className="w-3 h-3" />
              </button>
              <ul className="flex flex-col gap-4">
                {/* Trends with Icon */}
                <li className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaChartLine className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/trends" className="font-bold">Trends</Link>
                    <p className="text-xs font-normal mt-2">Latest Fashion design trends</p>
                  </div>
                </li>

                {/* Measurement with Icon */}
                <li className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/measure" className="font-bold">Measurement</Link>
                    <p className="text-xs font-normal mt-2">Take your Measurements</p>
                  </div>
                </li>

                {/* Dashboard with Icon */}
                <li className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/dashboard" className="font-bold">Dashboard</Link>
                    <p className="text-xs font-normal mt-2">Overview of Clients Data</p>
                  </div>
                </li>
                
                {/* Client Management with Icon */}
                <li className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/clientinformation" className="font-bold">Client Management</Link>
                    <p className="text-xs font-normal mt-2">Client Details Information</p>
                  </div>
                </li>

                {/* Client List with Icon */}
                <li className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/clientlist" className="font-bold">Client List</Link>
                    <p className="text-xs font-normal mt-2">Client Details Information</p>
                  </div>
                </li>
                
                {/* Fabric Library with Icon */}
                <li className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <FaRuler className="text-gray-500 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <Link href="/fabriclibrary" className="font-bold">Fabric Store</Link>
                    <p className="text-xs font-normal mt-2">Get fantastic fabrics and materials inspiration</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className='flex items-center mx-auto'>
          <SearchBar />
        </div>
       
        {/* Profile Image and Message Icon */}
        <div className="relative flex items-center ml-4">
          <span className='absolute bottom-0 left-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full'></span>
          <Image
            src="/dev-images/AvatarModal.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            onClick={toggleDropdownProfile} 
          />
          <Link href="/messages" className="relative ml-4">
            <MdMessage className="text-gray-500 w-6 h-6" />
            {messageCount > 0 && (
              <span className="absolute top-4 left-2 right-0 w-5 h-5 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded-full">
                {messageCount}
              </span>
            )}
          </Link>
        </div>

        {isDropdownOpenProfile && (
          <div className="absolute right-0 mt-12 w-64 bg-gray-500 text-white border rounded-lg shadow-lg p-4 z-10">
            {/* Close Icon for Profile Dropdown */}
            <button
              onClick={() => setDropdownOpenProfile(false)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:scale-105 transition-transform"
            >
              <FaTimes className="w-3 h-3" />
            </button>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center">
                <div className="flex-shrink-0 bg-white rounded-full p-2">
                  <FaSignOutAlt className="text-gray-500 w-5 h-5" />
                </div>
                <div className="ml-4">
                  <Link href="/login" className="font-bold">Log Out</Link>
                  <p className="text-xs font-normal mt-2">Sign out of your account</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
