"use client";
import React, { useState, useEffect } from "react";
import { MdHome, MdOutlineSchool, MdMoreHoriz, MdPostAdd } from "react-icons/md";
import { FaCalendarDays, FaUserPlus } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { CiCircleList } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import SigninUp from "../../components/SignUp"; // Import the SigninUp component

export default function SideBar() {
  const [isDayExperiencesOpen, setIsDayExperiencesOpen] = useState(false);
  const [isMyCommunitiesOpen, setIsMyCommunitiesOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsSignedIn(true);
    }
  }, []);

  if (showSignIn) {
    return <SigninUp />;
  }

  return (
    <div className="flex flex-col justify-between px-3 bg-white text-black h-full">
      <div>
        <nav className="mb-5">
          <ul>
            <Link href="/">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdHome />
                <li className="ml-4 sidebar-text-bold font-bold">Home</li>
              </div>
            </Link>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsDayExperiencesOpen(!isDayExperiencesOpen)}
              >
                <FaCalendarDays />
                <li className="ml-4 sidebar-text font-regular">
                  <Link href="/Explore">
                    Discover Groups
                  </Link>
                </li>
              </div>
            </div>
            <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <PiChalkboardTeacher />
                <li className="ml-4 sidebar-text font-regular">Messages</li>
              </div>
            </Link>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMyCommunitiesOpen(!isMyCommunitiesOpen)}
              >
                <IoPeople />
                <li className="ml-4 sidebar-text font-regular">My Communities</li>
              </div>
              {isMyCommunitiesOpen && (
                <ul className="pl-12 mt-2">
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Biking</li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Wine Tasting</li>
                </ul>
              )}
            </div>
            <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <CgProfile />
                <li className="ml-4 sidebar-text font-regular">Profile</li>
              </div>
            </Link>
            <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdMoreHoriz />
                <li className="ml-4 sidebar-text font-regular">More</li>
              </div>
            </Link>
            <Link href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdPostAdd />
                <li className="ml-4 sidebar-text font-regular">Post</li>
              </div>
            </Link>
          </ul>
        </nav>
        {isSignedIn ? (
          <button className="bg-[#12B9f3] text-white rounded-full shadow-lg py-3 px-8 w-90 transform transition-colors duration-500 hover:bg-primary-button_hover font-bold sidebar-text-bold">
            Post
          </button>
        ) : (
          <button
            className="bg-[#12B9f3] text-white rounded-full shadow-lg py-3 px-8 w-90 transform transition-colors duration-500 hover:bg-primary-button_hover font-bold sidebar-text-bold"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}