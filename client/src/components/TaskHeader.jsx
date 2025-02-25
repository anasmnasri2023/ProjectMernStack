import React, { useState, useRef, useEffect } from "react";
import TaskPopup from "./TaskPopup";
import { useDispatch } from "react-redux";

const TaskHeader = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const trigger = useRef(null);
  const popup = useRef(null);
  const dispatch = useDispatch();
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!popup.current) return;
      if (
        !popupOpen ||
        popup.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setPopupOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!popupOpen || keyCode !== 27) return;
      setPopupOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex flex-col gap-y-4 rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="pl-2 text-title-lg font-semibold text-black dark:text-white">
          Tasks
        </h3>
      </div>

      <div class="flex w-1/2 justify-end space-x-6.5">
        <button
          ref={trigger}
          onClick={() => {
            setPopupOpen(!popupOpen);
          }}
          className="flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80"
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
              fill=""
            />
          </svg>
          Add task
        </button>

        {/* <!-- ===== Task Popup Start ===== --> */}
        <TaskPopup
          popupOpen={popupOpen}
          setPopupOpen={setPopupOpen}
          popup={popup}
        />
        {/* <!-- ===== Task Popup End ===== --> */}
      </div>
    </div>
  );
};

export default TaskHeader;
