import React from "react";
import UserOne from "../images/user/user-01.png";
import UserThree from "../images/user/user-03.png";
import UserFour from "../images/user/user-04.png";
import UserFive from "../images/user/user-05.png";
import { useSelector } from "react-redux";

const ChatCard = () => {
  const { _ALL } = useSelector((state) => state.users);
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        New Users
      </h4>

      <div>
        {_ALL &&
          _ALL.slice(_ALL.length - 4, _ALL.length).map((user) => {
            return (
              <a
                href="#"
                className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img
                    src={
                      user?.picture
                        ? user?.picture.includes("https")
                          ? user.picture
                          : `http://localhost:5500/${user?.picture}`
                        : ""
                    }
                    alt="User"
                    className="h-14 w-14 rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                </div>

                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium">{user?.fullName}</h5>
                    <p>
                      <span className="text-xs">{user?.phone}</span>
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ChatCard;
