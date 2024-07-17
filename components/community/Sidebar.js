"use client";
import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { BiHash } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { IoBookmarks } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

import logo from "@/public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function SideBar() {
  const [isDayExperiencesOpen, setIsDayExperiencesOpen] = useState(false);
  const [isMyCommunitiesOpen, setIsMyCommunitiesOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between px-3 bg-white text-black h-full">
      <div>
        <nav className="mb-5">
          <ul>
            <a href="/">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdHome />
                <li className="ml-4 sidebar-text-bold font-bold">Home</li>
              </div>
            </a>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsDayExperiencesOpen(!isDayExperiencesOpen)}
              >
                <FaCalendarDays />
                <li className="ml-4 sidebar-text font-regular">Discover Groups</li>
              </div>
            </div>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <PiChalkboardTeacher />
                <li className="ml-4 sidebar-text font-regular">Messages</li>
              </div>
            </a>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <FaUserPlus />
                <li className="ml-4 sidebar-text font-regular">My Communities</li>
              </div>
            </a>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMyCommunitiesOpen(!isMyCommunitiesOpen)}
              >
                <CiCircleList />
                <li className="ml-4 sidebar-text font-regular">My Communities</li>
              </div>
              {isMyCommunitiesOpen && (
                <ul className="pl-12 mt-2">
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Biking</li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Wine Tasting</li>
                </ul>
              )}
            </div>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdOutlineSchool />
                <li className="ml-4 sidebar-text font-regular">Profile</li>
              </div>
            </a>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdOutlineSchool />
                <li className="ml-4 sidebar-text font-regular">More</li>
              </div>
            </a>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdOutlineSchool />
                <li className="ml-4 sidebar-text font-regular">Post</li>
              </div>
            </a>
          </ul>
        </nav>
        <button className="bg-[#12B9f3] text-white rounded-full shadow-lg py-3 px-8 w-90 transform transition-colors duration-500 hover:bg-primary-button_hover font-bold sidebar-text-bold">
          Sign In
        </button>
      </div>
    </div>
  );
}
