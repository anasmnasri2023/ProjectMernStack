import React, { useState } from "react";
import Logo from "../../images/logo/logo.svg";
import LogoDark from "../../images/logo/logo-dark.svg";
import cover from "../../images/logo/reset.svg";
import { Link } from "react-router-dom";
import { CheckMail } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "../../components/form/InputGroup";

const Resetpw = () => {
  const [form, setfForm] = useState({});
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.errors);

  const OnChangeHandler = (e) => {
    setfForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(CheckMail(form));
  };
  return (
    <>
      <div className="h-screen rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className=" flex h-screen flex-wrap items-center">
          <div className="hidden h-screen w-full xl:block xl:w-1/2">
            <div className="h-screen px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">Esprit created by Apollo Team's Task Manger App</p>

              <img src={cover} alt="Cover" />
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Reset Account Password
              </h2>
              <form onSubmit={onSubmitHandler}>
                <div className="mt-5 text-left">
                  <p>
                    Enter your email address to receive a password reset link.
                  </p>
                  <br></br>
                </div>
                <InputGroup
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  icon={
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                          fill=""
                        />
                        <path
                          d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  }
                  action={OnChangeHandler}
                  errors={content?.email ?? ""}
                />

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Send Password Reset Link "
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpw;
