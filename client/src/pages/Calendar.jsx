import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import Cld from "../components/elements/Calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { UseAuth } from "../hooks/useAuth";
import { ROLES } from "../data/roles";

const Calendar = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Calendar" />

      <Cld />
     
    </DefaultLayout>
  );
};

export default UseAuth(
  Calendar,
  ROLES.map((r) => {
    return r.title;
  })
);
