import React, { useEffect, useRef, useState } from "react";
import InputGroup from "./form/InputGroup";
import SelectGroup from "./form/SelectGroup"
import { useDispatch, useSelector } from "react-redux";
import { AddUser, UpdateUser } from "../redux/actions/users";
import { _FindOneUser } from "../redux/reducers/users";
import { ROLES } from "../data/roles";
import { setRefresh } from "../redux/reducers/commons";

const UserPopup = (props) => {
  const { refresh } = useSelector((state) => state.commons);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.errors);
  const { _ONE } = useSelector((state) => state.users);

  const options = ROLES.map((role) => {
    return {
      value: role.title,
      label: role.title,
    };
  });

  const OnChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const OnChangeSelect = (e) => {
    setForm({
      ...form,
      roles: e,
    });
  };
  useEffect(() => {
    setForm(_ONE);
  }, [_ONE]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(_ONE).length > 0) {
      dispatch(AddUser(form, props.setPopupOpen));
    } else {
      dispatch(UpdateUser(form, _ONE?._id, props.setPopupOpen));
    }
  };
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
            dispatch(_FindOneUser({}));
            setTimeout(() => {
              dispatch(setRefresh(false));
            }, 2000);
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

        <form onSubmit={onSubmitHandler}>
          {!refresh ? (
            <div className="p-6.5">
              <InputGroup
                label={"Full Name"}
                name={"fullName"}
                type={"text"}
                placeholder={"Enter your full name "}
                required={true}
                action={OnChangeHandler}
                errors={content?.fullName ?? ""}
                defaultValue={form?.fullName ?? ""}
              />
              <InputGroup
                label={"Email"}
                name={"email"}
                type={"email"}
                placeholder={"Enter your email "}
                required={true}
                action={OnChangeHandler}
                errors={content?.email ?? ""}
                defaultValue={form?.email ?? ""}
              />
              <InputGroup
                label={"Phone"}
                name={"phone"}
                type={"phone"}
                placeholder={"Enter your phone "}
                required={true}
                action={OnChangeHandler}
                errors={content?.phone ?? ""}
                defaultValue={form?.phone ?? ""}
              />
              <SelectGroup
                label="Roles"
                name="roles"
                required={true}
                action={OnChangeSelect}
                errors={content?.roles ?? ""}
                defaultValue={
                  form?.roles
                    ? options.filter((obj) =>
                        form?.roles.some((r) => r === obj.value)
                      )
                    : []
                }
                options={options}
                isMulti={true}
              />

              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Save User
              </button>
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default UserPopup;
