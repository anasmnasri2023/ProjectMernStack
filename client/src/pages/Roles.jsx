import React, { useEffect } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import { ROLES } from "../data/roles";
import { UseAuth } from "../hooks/useAuth";
const Roles = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Roles" />
      <UserHeader status={false} />
      <br></br>
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-2">
        {ROLES.map((role) => {
          return (
            <div className="rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <div className="flex items-center justify-between">
                    <Link to="#" className="text-md">
                      {role.title}
                    </Link>
                    {
                      <span className="rounded-full p-2 text-sm shadow-md">
                        {role.avatar}
                      </span>
                    }
                  </div>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>{role.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default UseAuth(Roles, ["ADMIN"]);
