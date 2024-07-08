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
    <div className="flex flex-col w-300 justify-between px-3 bg-white text-black h-full">
      <div>
        {/* <Link href="/" className="flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-200 hover:bg-primary-twitter_icon hover:bg-opacity-70 mt-1 mb-5 cursor-pointer">
                    <Image src={logo} height={100} width={100} alt="logo" objectFit="contain" objectPosition="left" />
                </Link> */}
        <nav className="mb-5">
          <ul>
            {/* <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdHome />
                <li className="ml-4 sidebar-text-bold font-bold">Home</li>
              </div>
            </a> */}
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <BiHash />
                <li className="ml-4 sidebar-text font-regular">
                  Explore Communities
                </li>
              </div>
            </a>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsDayExperiencesOpen(!isDayExperiencesOpen)}
              >
                <FaCalendarDays />
                <li className="ml-4 sidebar-text font-regular">
                  Day Experiences
                </li>
              </div>
              {isDayExperiencesOpen && (
                <ul className="pl-12 mt-2">
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">
                    Enriching Activities
                  </li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">
                    Learning Experiences
                  </li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">
                    Sipping Hangouts
                  </li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">
                    Kids Fun
                  </li>
                </ul>
              )}
            </div>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <PiChalkboardTeacher />
                <li className="ml-4 sidebar-text font-regular">Workshops</li>
              </div>
            </a>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <IoBookmarks />
                <li className="ml-4 sidebar-text font-regular">Packages</li>
              </div>
            </a>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <FaUserPlus />
                <li className="ml-4 sidebar-text font-regular">
                  Become a Host
                </li>
              </div>
            </a>
            <a href="">
              <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
                <MdOutlineSchool />
                <li className="ml-4 sidebar-text font-regular">
                  Learner Communities
                </li>
              </div>
            </a>
            <div>
              <div
                className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMyCommunitiesOpen(!isMyCommunitiesOpen)}
              >
                <CiCircleList />
                <li className="ml-4 sidebar-text font-regular">
                  My Communities
                </li>
              </div>
              {isMyCommunitiesOpen && (
                <ul className="pl-12 mt-2">
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">Biking</li>
                  <li className="p-2 hover:bg-[#12B9f3] rounded-md">
                    Wine Tasting
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </nav>
        {/* <button className="bg-[#12B9f3] text-white rounded-full shadow-lg py-3 px-8 w-90 transform transition-colors duration-500 hover:bg-primary-button_hover font-bold sidebar-text-bold">
          Tweet
        </button> */}
        <div className="flex justify-between items-center mb-7 mt-6 hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-200">
          <div className="h-11 w-11">
            <img
              className="rounded-full"
              src="https://randomuser.me/api/portraits/women/57.jpg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-md text-black">AdemCan Certel</span>
            <span className="text-primary-profile_color text-sm">
              @CertelAdemcan
            </span>
          </div>

          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
