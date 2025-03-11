import React from "react";
import TodayDate from "../TodayDate";
import { AccountToggle } from "../OldSidebar/AccountToggle";
import { FiSearch } from "react-icons/fi";
import { UserAvatar } from "./UserAvatar";
import { TbLayoutSidebarFilled } from "react-icons/tb";

export const Topbar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className="px-4 mt-4 pb-4 border-gray-200">
      <div className="flex items-center justify-between p-0.5">
        <div className="flex-row flex gap-2">
          <button
                className="z-10 h-fit my-auto text-[#142139]"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <TbLayoutSidebarFilled
                  className={`${isCollapsed ? "text-[#1e3356]" : "text-[#142139]"}`}
                  size={`${isCollapsed ? 17 : 20}`}
                />
              </button>
        <div>
        </div>
        <div>
          <span className="text-xl font-bold block">
            Hello, Doctor Tasneem!
          </span>
          <span className="text-sm block text-gray-500">
            <TodayDate />
          </span>
           
        </div>
        </div>

        <div className="flex justify-end">
          <div className="relative bg-white rounded-lg flex items-center px-2 text-sm border-1 border-gray-200 mx-8 my-auto h-8 w-64">
            <FiSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent placeholder:text-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <UserAvatar />
          </div>
        </div>
      </div>
    </div>
  );
};
