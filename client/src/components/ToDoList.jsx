import React, { useEffect, useState } from "react";
import PaginationOne from "./PaginationOne";
import TaskRow from "./elements/TaskRow";
import { useDispatch, useSelector } from "react-redux";
import { FindTaskAction } from "../redux/actions/tasks";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const { _ALL } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(FindTaskAction());
  }, []);

  useEffect(() => {
    setTasks(_ALL);
  }, [_ALL]);
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-4 py-4 dark:border-strokedark md:px-6 md:py-6 xl:px-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                Tasks List
              </h2>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 md:px-6 md:py-6 xl:px-7.5">
          <div className="flex flex-col gap-6">
            {/* <!-- To Do Item --> */}
            {tasks != undefined
              ? tasks.map((task) => {
                  return <TaskRow {...task} />;
                })
              : ""}
          </div>
        </div>
        {/*      <PaginationOne /> */}
      </div>
    </div>
  );
};

export default ToDoList;
