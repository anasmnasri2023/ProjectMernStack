import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Logo from "../images/logo/logo.svg";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              WORK SPACE
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/projects/project-list"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("project-list") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                      fill=""
                    />
                    <path
                      d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                      fill=""
                    />
                    <path
                      d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                      fill=""
                    />
                    <path
                      d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                      fill=""
                    />
                  </svg>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects/task-list"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("task-list") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9756)">
                    <path
        fill="currentColor"
        d="M6.21 14.339L-.007 8.22l3.084-3.035L6.21 8.268l6.713-6.607 3.084 3.035-9.797 9.643zM1.686 8.22l4.524 4.453 8.104-7.976-1.391-1.369L6.21 9.935 3.077 6.852 1.686 8.221z"
      />
      </g>
                    <defs>
                      <clipPath id="clip0_130_9756">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Tasks
                </NavLink>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                      fill=""
                    />
                  </svg>
                  Calendar
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/Kanban"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("Kanban") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M.5 3.5V3a.5.5 0 00-.5.5h.5zm6 0H7a.5.5 0 00-.5-.5v.5zm0 11v.5a.5.5 0 00.5-.5h-.5zm-6 0H0a.5.5 0 00.5.5v-.5zm8-11V3a.5.5 0 00-.5.5h.5zm6 0h.5a.5.5 0 00-.5-.5v.5zm0 6v.5a.5.5 0 00.5-.5h-.5zm-6 0H8a.5.5 0 00.5.5v-.5zM0 1h7V0H0v1zm8 0h7V0H8v1zM.5 4h6V3h-6v1zM6 3.5v11h1v-11H6zM6.5 14h-6v1h6v-1zm-5.5.5v-11H0v11h1zM8.5 4h6V3h-6v1zm5.5-.5v6h1v-6h-1zm.5 5.5h-6v1h6V9zM9 9.5v-6H8v6h1z"
                    />
                  </svg>
                  Kanban
                </NavLink>
              </li>
            </ul>
            {/* <!-- Others Group --> */}
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                STAFF
              </h3>
            </div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/roles"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("roles") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0  19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9801)">
                      <path d="M6 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path
                        fillRule="evenodd"
                        d="M15.854 5.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9801">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Roles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("users") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0  19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9801)">
                      <path
                        fill="currentColor"
                        d="M10.5 14.49v.5h.5v-.5h-.5zm-10 0H0v.5h.5v-.5zm14 .01v.5h.5v-.5h-.5zM8 3.498a2.499 2.499 0 01-2.5 2.498v1C7.433 6.996 9 5.43 9 3.498H8zM5.5 5.996A2.499 2.499 0 013 3.498H2a3.499 3.499 0 003.5 3.498v-1zM3 3.498A2.499 2.499 0 015.5 1V0A3.499 3.499 0 002 3.498h1zM5.5 1C6.881 1 8 2.119 8 3.498h1A3.499 3.499 0 005.5 0v1zm5 12.99H.5v1h10v-1zm-9.5.5v-.003-.004-.005-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.003-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.005-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003H0V14.49h1zm2.5-4.496h4v-1h-4v1zm6.5 2.5V14.49h1v-.004-.004-.005-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.003-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.005-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.005-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.004-.003-.004-.003-.004-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003-.004-.004-.003-.004-.003h-1zm-2.5-2.5a2.5 2.5 0 012.5 2.5h1a3.5 3.5 0 00-3.5-3.5v1zm-6.5 2.5a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zM14 13v1.5h1V13h-1zm.5 1H12v1h2.5v-1zM12 11a2 2 0 012 2h1a3 3 0 00-3-3v1zm-.5-3A1.5 1.5 0 0110 6.5H9A2.5 2.5 0 0011.5 9V8zM13 6.5A1.5 1.5 0 0111.5 8v1A2.5 2.5 0 0014 6.5h-1zM11.5 5A1.5 1.5 0 0113 6.5h1A2.5 2.5 0 0011.5 4v1zm0-1A2.5 2.5 0 009 6.5h1A1.5 1.5 0 0111.5 5V4z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9801">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Users
                </NavLink>
              </li>

              {/* <!-- Menu Item Tables --> */}
            </ul>

            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                ADMIN DASHBOARD
              </h3>
            </div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Tables --> */}
              <li>
                <NavLink
                  to="/admin"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("admin") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9756)">
                    <path d="M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z" />
      <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" />
      <path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9756">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Analytics
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tables"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("tables") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9756)">
                      <path
                        d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9756">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Activity Tables
                </NavLink>
              </li>

              {/* <!-- Menu Item Chart --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/chart" || pathname.includes("chart")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/chart" ||
                            pathname.includes("chart")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1184_13869)">
                            <path
                              d="M10.8559 0.506226C10.5184 0.506226 10.209 0.787476 10.209 1.1531V6.7781C10.209 7.1156 10.4902 7.42498 10.8559 7.42498H16.8746C17.0434 7.42498 17.2121 7.3406 17.3246 7.2281C17.4371 7.08748 17.4934 6.91873 17.4934 6.74998C17.2684 3.23435 14.3434 0.506226 10.8559 0.506226ZM11.4746 6.1031V1.79998C13.809 2.08123 15.6934 3.82498 16.1434 6.13123H11.4746V6.1031Z"
                              fill=""
                            />
                            <path
                              d="M15.384 8.69057H9.11211V2.6437C9.11211 2.3062 8.83086 2.02495 8.49336 2.02495C8.40898 2.02495 8.32461 2.02495 8.24023 2.02495C3.96523 1.99682 0.505859 5.48432 0.505859 9.75932C0.505859 14.0343 3.99336 17.5218 8.26836 17.5218C12.5434 17.5218 16.0309 14.0343 16.0309 9.75932C16.0309 9.59057 16.0309 9.42182 16.0027 9.2812C16.0027 8.9437 15.7215 8.69057 15.384 8.69057ZM8.26836 16.2562C4.66836 16.2562 1.77148 13.3593 1.77148 9.75932C1.77148 6.32807 4.47148 3.48745 7.87461 3.29057V9.30932C7.87461 9.64682 8.15586 9.9562 8.52148 9.9562H14.7934C14.6809 13.4437 11.784 16.2562 8.26836 16.2562Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1184_13869">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Chart
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/chart/basic-chart"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              Tasks Infographics
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/chart/advanced-chart"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              Users Infographics
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Chart --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
