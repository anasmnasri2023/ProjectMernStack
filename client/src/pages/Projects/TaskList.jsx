import React, { useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import TaskHeader from "../../components/TaskHeader";
import ToDoList from "../../components/ToDoList";
const TaskList = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="TaskList" />

        {/* <!-- Task Header Start --> */}
        <TaskHeader />
        <br></br>
        {/* <!-- Task Header End --> */}
        <ToDoList />
        <br></br>
      </div>
    </DefaultLayout>
  );
};

export default TaskList
