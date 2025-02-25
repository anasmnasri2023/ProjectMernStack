import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskPopup from "./TaskPopup";
import { setRefresh } from "../redux/reducers/commons";
import CommentPopup from "./CommentPopup";
const DropdownDefault = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const [popupOpen, setPopupOpen] = useState(false);
  const popup = useRef(null);

  const [popupOpenComment, setPopupOpenComment] = useState(false);
  const popupComment = useRef(null);

  

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <button ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z"
            fill="#98A6AD"
          />
          <path
            d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
            fill="#98A6AD"
          />
          <path
            d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z"
            fill="#98A6AD"
          />
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button
          className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
          onClick={() => {
            dispatch(FindOneTaskAction(props._id));
            setPopupOpen(true);
          }}
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_62_9787)">
   
            <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3l1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z" />
    
            </g>
            <defs>
              <clipPath id="clip0_62_9787">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Edit
        </button>

      
        <button
          className="flex w-full 
        items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm
         hover:bg-gray dark:hover:bg-meta-4"
          onClick={() => {
            dispatch(FindOneTaskAction(props._id));
            setPopupOpenComment(true);
          }}
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_62_9787)">
              <path d="M12 11.25a.75.75 0 100 1.5.75.75 0 000-1.5zm-3 0a.75.75 0 100 1.5.75.75 0 000-1.5zm6 0a.75.75 0 100 1.5.75.75 0 000-1.5zm4.415-5.96C15.71 1.195 9.385.88 5.29 4.584 1.195 8.289.88 14.614 4.584 18.709l-2.438 2.437A.5.5 0 002.5 22H12a10 10 0 006.709-2.585c4.096-3.705 4.412-10.03.706-14.125zM12 21H3.707l1.929-1.929a.5.5 0 000-.707 8.999 8.999 0 016.362-15.362A8.999 8.999 0 0112 21z" />
            </g>
            <defs>
              <clipPath id="clip0_62_9787">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Comment
        </button>
      </div>
      <TaskPopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        popup={popup}
      />
      <CommentPopup
        popupOpen={popupOpenComment}
        setPopupOpen={setPopupOpenComment}
        popup={popupComment}
      />
    </div>
  );
};

export default DropdownDefault;
