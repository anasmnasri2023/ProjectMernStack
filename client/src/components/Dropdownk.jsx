import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTaskAction, FindOneTaskAction } from "../redux/actions/tasks";
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

  const deleteTask = (id) => {
    dispatch(DeleteTaskAction(id));
  };

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

        {props.keepDelete === undefined || props.keepDelete ? <button
          className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
          onClick={() => deleteTask(props._id)}
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
         
                      <path
                        d='M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z'
                        fill=''
                      />
                      <path
                        d='M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z'
                        fill=''
                      />
                      <path
                        d='M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z'
                        fill=''
                      />
                      <path
                        d='M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z'
                        fill=''
                      />
                    
          </svg>
          Delete
        </button> : null }
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
