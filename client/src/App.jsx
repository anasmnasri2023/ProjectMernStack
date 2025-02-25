import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Resetpw from "./pages/Authentication/Resetpw";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Calendar from "./pages/Calendar";
import AdvancedChart from "./pages/Chart/AdvancedChart";
import BasicChart from "./pages/Chart/BasicChart";
import Analytics from "./pages/Dashboard/Analytics";
import Kanban from "./pages/Kanban";

import ErrorPage from "./pages/Pages/ErrorPage";

import PricingTables from "./pages/Pages/PricingTables";
import Settings from "./pages/Pages/Settings";
import Profile from "./pages/Profile";
import ProjectList from "./pages/Projects/ProjectList";
import TaskList from "./pages/Projects/TaskList";
import Roles from "./pages/Roles";
import Tables from "./pages/Tables";

import Users from "./pages/Users";
import { setUser } from "./redux/reducers/auth";
import { store } from "./redux/store";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setAuthToken } from "./lib/setAuthToken";
import Reset from "./pages/Authentication/Reset";
import Unauthorized from "./pages/Unauthorized";
import { Logout } from "./redux/actions/auth";
import { notificationSlice } from "./redux/reducers/notifications";

const socketClient = io("http://localhost:3002", {
  transports: ["websocket"],
  upgrade: false,
});

if (localStorage.token) {
  const decoded = jwtDecode(localStorage.token);
  store.dispatch(setUser(decoded));
  setAuthToken(localStorage.token);
  const current_date = Date.now() / 1000;
  if (current_date > decoded.exp) {
    store.dispatch(Logout());
  }
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const { isConnected, user } = useSelector((e) => e.auth);

  const preloader = document.getElementById("preloader");
  const dispatch = useDispatch();

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (isConnected) {
      axios
        .get("/api/notifications")
        .then((n) => {
          dispatch(notificationSlice.actions.addNotifications(n.data));
        })
        .catch((e) => console.log(e));
      //if connected
      //connect this user to socket server
      socketClient.connect();
      socketClient.on("connect", () => {
        socketClient.emit("connected_client", user.id);
      });
      socketClient.on("notification", (n) => {
        // console.log("notification received: " + JSON.stringify(d));
        dispatch(notificationSlice.actions.addNotifications(n));
      });
    } else {
      //delete user id from socket
      if (socketClient.connected) socketClient.disconnect();
    }
  }, [isConnected]);

  return (
    !loading && (
      <>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route exact path="/admin" element={<Analytics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pages/pricing-tables" element={<PricingTables />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/projects/task-list" element={<TaskList />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/projects/project-list" element={<ProjectList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/resetpw" element={<Resetpw />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/chart/basic-chart" element={<BasicChart />} />
          <Route path="/chart/advanced-chart" element={<AdvancedChart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </>
    )
  );
};

export default App;
