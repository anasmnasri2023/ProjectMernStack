import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import DataTableTwo from "../../components/DataTableTwo";
import { UseAuth } from "../../hooks/useAuth";
import { ROLES } from "../../data/roles";

const ProjectList = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Projects List" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <DataTableTwo />
      </div>
    </DefaultLayout>
  );
};

export default UseAuth(
  ProjectList,
  ROLES.filter((r) => r.title != "ENGINEER").map(
    (i) => i.title
  )
);
