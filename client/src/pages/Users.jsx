import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import DefaultLayout from "../layout/DefaultLayout";
import DataTableOne from "../components/DataTableOne";
import UserHeader from "../components/UserHeader";
import { useDispatch, useSelector } from "react-redux";
import { FindUsers } from "../redux/actions/users";
import { UseAuth } from "../hooks/useAuth";
const Users = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const { _ALL } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(FindUsers());
    };
    fetchData();
  }, []);
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      {/* <!-- User Header Start --> */}
      <UserHeader
        status={true}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
      {/* <!-- User Header End --> */}
      <br />
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <DataTableOne
          data={_ALL }
          popupOpen={popupOpen}
          setPopupOpen={setPopupOpen}
        />
      </div>
    </DefaultLayout>
  );
};

export default UseAuth(Users, ["ADMIN"]);
