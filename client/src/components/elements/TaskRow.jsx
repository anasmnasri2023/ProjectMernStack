import React from "react";
import { MOCK_PRIORITY } from "../../data/mock";
import Dropdownk from "../Dropdownk";
const TaskRow = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-grow items-center gap-4.5">
        <div className="hidden h-15 w-full max-w-15 items-center justify-center rounded-full border border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 xsm:flex">
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_605_15057)">
              <path
                d="M13.0842 5.33077V11.4067C13.0842 14.2371 11.3726 15.9467 8.778 15.9467C6.18312 15.9467 4.3615 14.2371 4.3615 11.4067V0H0V11.4067C0 16.5914 3.42261 19.8145 8.778 19.8145C14.1055 19.8145 17.4457 16.5914 17.4457 11.4067V0H17.3691C15.069 0.7498 13.3531 2.81913 13.0842 5.33077Z"
                fill="url(#paint0_linear_605_15057)"
              />
              <path
                d="M21.1794 0H21.1045V19.6186H25.4661V5.33473C25.4249 3.15456 23.4808 0.750281 21.1794 0Z"
                fill="url(#paint1_linear_605_15057)"
              />
              <path
                d="M13.0842 5.33077V11.4067C13.0842 11.4103 13.0839 11.414 13.0839 11.418C13.085 11.4784 13.0882 11.5383 13.0882 11.5992C13.0882 15.6912 10.0528 19.0615 6.14392 19.5207C6.95742 19.7131 7.83731 19.8145 8.778 19.8145C14.1055 19.8145 17.4457 16.5914 17.4457 11.4067V0H17.3691C15.069 0.7498 13.3531 2.81913 13.0842 5.33077Z"
                fill="url(#paint2_linear_605_15057)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_605_15057"
                x1="14.9261"
                y1="17.8993"
                x2="3.30015"
                y2="-1.93446"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2535C5" />
                <stop offset="0.169697" stopColor="#36409B" />
                <stop offset="0.575758" stopColor="#475BC6" />
                <stop offset="1" stopColor="#7075E4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_605_15057"
                x1="23.2853"
                y1="0"
                x2="23.2853"
                y2="19.6187"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#375AD8" />
                <stop offset="0.472727" stopColor="#3C56DD" />
                <stop offset="1" stopColor="#2A1A8F" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_605_15057"
                x1="11.7948"
                y1="0"
                x2="11.7948"
                y2="19.8146"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#233593" />
                <stop offset="0.472727" stopColor="#4957D7" />
                <stop offset="0.890909" stopColor="#5465FF" />
                <stop offset="1" stopColor="#6A67FF" />
              </linearGradient>
              <clipPath id="clip0_605_15057">
                <rect width="25.7692" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-black dark:text-white">
            {props.title}
          </h4>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <span className="flex items-center gap-1.5">
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                  fill=""
                />
              </svg>

              <span className="text-xs font-medium">{props.start_date}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <span
          className={`rounded bg-meta-3/[0.08] px-2.5 py-1.5 text-sm font-medium text-white ${
            props.priority &&
            MOCK_PRIORITY.filter((p) => p.value === props.priority)[0].color
          }`}
        >
          {props.priority &&
            MOCK_PRIORITY.filter((p) => p.value === props.priority)[0].label}
        </span>

        <Dropdownk className="rotate-180" {...props} />
      </div>
    </div>
  );
};

export default TaskRow;
