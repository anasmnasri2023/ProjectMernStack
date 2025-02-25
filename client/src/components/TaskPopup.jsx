import React, { useEffect, useRef, useState } from "react";
import { MOCK_DATA, MOCK_PRIORITY, MOCK_STATUS, MOCK_TYPE } from "../data/mock";
import SelectGroup from "./form/SelectGroup";
import { useDispatch, useSelector } from "react-redux";
import { FindUsers } from "../redux/actions/users";
import InputGroup from "./form/InputGroup";
import { AddTaskAction, UpdateTaskAction } from "../redux/actions/tasks";
import { _FindOneTask } from "../redux/reducers/tasks";
import { setRefresh } from "../redux/reducers/commons";
import moment from "moment";
const TaskPopup = (props) => {
  const [users, setUsers] = useState([]);

  
  const {roles} = useSelector(s=>s.auth.user);
  const disabledSelects = {

  }

  const { _ALL } = useSelector((state) => state.users);
  const { _ONE } = useSelector((state) => state.tasks);
  const [form, setForm] = useState({});
  const { content } = useSelector((state) => state.errors);
  const { refresh } = useSelector((state) => state.commons);
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(_ONE);
  }, [_ONE]);

  const [projects, setProjects] = useState(
    MOCK_DATA.map((p) => {
      return {
        value: p.project_id,
        label: p.project_name,
      };
    })
  );

  const [types, setTypes] = useState(
    MOCK_TYPE.map((p) => {
      return {
        value: p.value,
        label: p.label,
      };
    })
  );

  const [priority, setPriority] = useState(
    MOCK_PRIORITY.map((p) => {
      return {
        label: p.label,
        value: p.value,
      };
    })
  );

  const [status, setStatus] = useState(
    MOCK_STATUS.map((p) => {
      return {
        value: p.value,
        label: p.label,
      };
    })
  );

  const clearForm = () => {
    dispatch(_FindOneTask({}));
    setForm({});
  };

  const OnChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const OnChangeSelect = (e, name) => {
    setForm({
      ...form,
      [name]: e,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (!Object.keys(_ONE).length > 0) {
      dispatch(AddTaskAction(form, props.setPopupOpen));
    } else {
      dispatch(UpdateTaskAction(form, _ONE?._id, props.setPopupOpen));
    }
  };

  const isDisabled = (p, r)=>{
    if(!Array.isArray(r) || r.includes("ADMIN")) return false;
    if(r.includes("CM") && p === "assigns") return false
    else if(r.includes("ENGINEER") && p === "status") return false
    else if(r.includes("CM")) return false;
    return true;
  }

  const [files, setFiles] = useState(null);
  useEffect(() => {
    dispatch(FindUsers());
  }, []);

  useEffect(() => {
    const data = _ALL.map((u) => {
      return {
        value: u._id,
        label: (
          <p className="flex h-[30px] items-center space-x-2 p-1">
            <img
              src={`${
                u.picture
                  ? u.picture.includes("https")
                    ? u.picture
                    : `http://localhost:5500/${u.picture}`
                  : ""
              }`}
              className="h-[30px] w-auto rounded-full"
            />
            {`${u.fullName}`}
          </p>
        ),
      };
    });
    setUsers(data);
  }, [_ALL]);

  return (
    <div
      className={`fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 px-4 py-5 ${
        props.popupOpen === true ? "block" : "hidden"
      }`}
    >
      <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
        <button
          onClick={() => {
            props.setPopupOpen(false);
            clearForm();
            dispatch(setRefresh(false));
          }}
          className="absolute right-1 top-1 sm:right-5 sm:top-5"
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
              fill=""
            />
          </svg>
        </button>
        {!refresh ? (
          <form onSubmit={onSubmitHandler}>
            <SelectGroup
              label={"Projects"}
              options={projects}
              disabled={isDisabled("project",roles)}
              name="project"
              action={(e) => OnChangeSelect(e, "project")}
              required={true}
              errors={content.project}
              isMulti={false}
              defaultValue={
                form.project
                  ? projects.filter((p) => p.value == form.project)
                  : []
              }
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3  focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
            />
            <SelectGroup
              label={"Assign to"}
              options={users}
              name="assigns"
              action={(e) => OnChangeSelect(e, "assigns")}
              isMulti={true}
              required={true}
              disabled={isDisabled("assigns",roles)}
              errors={content.assigns}
              defaultValue={
                form?.assigns
                  ? users.filter((obj1) =>
                      form?.assigns.some((a) => a._id === obj1.value)
                    )
                  : []
              }
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3  focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
            />

            <InputGroup
              label="Title"
              name="title"
              placeholder={"Task title"}
              disabled={isDisabled("title",roles)}
              action={OnChangeHandler}
              required={true}
              errors={content.title}
              defaultValue={form?.title}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
            />

            <div className="mb-5">
              <label
                htmlFor="taskDescription"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Task description <span className="text-meta-1">*</span>
              </label>
              <textarea
                name="description"
                onChange={OnChangeHandler}
                cols="30"
                rows="7"
                value={form?.description}
                placeholder="Enter task description"
                disabled={isDisabled("description",roles)}
                className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              ></textarea>
              {content.description && (
                <div className="text-sm text-red">{content.description}</div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="mb-5">
                <label
                  htmlFor="start_date"
                  className="mb-2.5 block font-medium text-black dark:text-white"
                >
                  Start date
                </label>
                <input
                  type="date"
                  name="start_date"
                  value={form?.start_date ? form?.start_date : ""}
                  onChange={OnChangeHandler}
                  disabled={isDisabled("start_date",roles)}
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="end_date"
                  className="mb-2.5 block font-medium text-black dark:text-white"
                >
                  End date
                </label>
                <input
                  type="date"
                  name="end_date"
                  value={form?.end_date ? form?.end_date : ""}
                  onChange={OnChangeHandler}
                  disabled={isDisabled("end_date",roles)}
                  className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <SelectGroup
                label={"Priority"}
                options={priority}
                name="priority"
                action={(e) => OnChangeSelect(e, "priority")}
                disabled={isDisabled("priority",roles)}
                required={true}
                defaultValue={
                  form.priority
                    ? priority.filter((p) => p.value == form.priority)
                    : []
                }
                errors={content.priority}
                className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3  focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />

              <SelectGroup
                label={"Status"}
                options={status}
                name="status"
                disabled={isDisabled("status",roles)}
                action={(e) => OnChangeSelect(e, "status")}
                required={true}
                defaultValue={
                  form.status
                    ? status.filter((p) => p.value == form.status)
                    : []
                }
                errors={content.status}
                className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3  focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />
            </div>

            {/* <div className="mb-5">
              <label
                htmlFor="taskImg"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Add image
              </label>
              <div>
                <div
                  id="FileUpload"
                  className="relative block w-full appearance-none rounded-sm border border-dashed border-stroke bg-white px-4 py-4 dark:border-strokedark dark:bg-boxdark sm:py-14"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 z-50 m-0 h-full w-full p-0 opacity-0 outline-none"
                    onChange={() => setFiles(event.target.files)}
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-11.5 w-11.5 items-center justify-center rounded-full border border-stroke bg-primary/5 dark:border-strokedark">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_75_12841)">
                          <path
                            d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 4.85663V14.1666H9.16667V4.85663L4.1075 9.91663L2.92917 8.73829L10 1.66663L17.0708 8.73746L15.8925 9.91579L10.8333 4.85829V4.85663Z"
                            fill="#3C50E0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_75_12841">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <p className="text-xs">
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                </div>

                {files !== null && (
                  <div className="mt-4.5 border border-stroke bg-white px-4 py-3 dark:border-strokedark dark:bg-boxdark">
                    <div className="flex items-center justify-between">
                      <span>{files[0].name}</span>

                      <button onClick={() => setFiles(null)}>
                        <svg
                          className="fill-current"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill=""
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
            <div>
              <SelectGroup
                label={"Type"}
                options={types}
                name="type"
                disabled={isDisabled("type",roles)}
                action={(e) => OnChangeSelect(e, "type")}
                required={true}
                defaultValue={
                  form.type ? types.filter((p) => p.value == form.type) : []
                }
                errors={content.status}
                className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3  focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />
            </div>
            <button
              className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4.5 py-2.5 font-medium text-white"
              type="submit"
            >
          
              Save Task
            </button>
          </form>
        ) : (
          <div class="bg-gray-900 flex min-h-screen items-center justify-center">
            <div class="w-[200px]">
              <div class="space-y-5 rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5">
                <div class="bg-rose-100/10 h-24 rounded-lg"></div>
                <div class="space-y-3">
                  <div class="bg-rose-100/10 h-3 w-3/5 rounded-lg"></div>
                  <div class="bg-rose-100/20 h-3 w-4/5 rounded-lg"></div>
                  <div class="bg-rose-100/20 h-3 w-2/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskPopup;
