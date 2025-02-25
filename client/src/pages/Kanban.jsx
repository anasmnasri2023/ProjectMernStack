import React, { useEffect, useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import Dropdownk from "../components/Dropdownk";

import Drag from "../js/drag.js";
import { useDispatch, useSelector } from "react-redux";
import { FindTaskAction } from "../redux/actions/tasks";
import { UseAuth } from "../hooks/useAuth";
import { ROLES } from "../data/roles";

const Kanban = () => {
  useEffect(() => {
    Drag();
  });
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [tasks, setTasks] = useState([]);
  const { _ALL } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(FindTaskAction());
  }, []);
  useEffect(() => {
    setTasks(_ALL);
  }, [_ALL]);

  const onHold = tasks.filter((task) => task.status === "1");
  const inProgress = tasks.filter((task) => task.status === "2");
  const completed = tasks.filter((task) => task.status === "3");
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="Task Kanban" />
      </div>
      {/* <!-- Task List Wrapper Start --> */}
      <div className="mt-9 grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {/* <!-- Todo list --> */}
        <div className="swim-lane flex flex-col gap-5.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            On Hold
          </h4>
          {onHold.map((t) => {
            return (
              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    {t.title}
                  </h5>
                </div>

                <div className="absolute right-4 top-4">
                  <Dropdownk keepDelete={false} {...t} />
                </div>
              </div>
            );
          })}
        </div>

        {/* <!-- Progress list --> */}
        <div className="swim-lane flex flex-col gap-5.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            In Progress
          </h4>

          {inProgress.map((t) => {
            return (
              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    {t.title}
                  </h5>
                </div>

                <div className="absolute right-4 top-4">
                  <Dropdownk keepDelete={false} {...t} />
                </div>
              </div>
            );
          })}
        </div>

        {/* <!-- QA list --> */}
        <div className="swim-lane flex flex-col gap-5.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Completed
          </h4>

          {completed.map((t) => {
            return (
              <div
                draggable="true"
                className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
              >
                <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    {t.title}
                  </h5>
                  <p>{form?.start_date}</p>
                </div>

                <div className="absolute right-4 top-4">
                  <Dropdownk keepDelete={false} {...t} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <!-- Task List Wrapper End --> */}
    </DefaultLayout>
  );
};

export default UseAuth(
  Kanban,
  ROLES.map((r) => {
    return r.title;
  })
);
