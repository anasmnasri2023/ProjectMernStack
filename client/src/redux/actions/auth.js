import axios from "axios";
import { setErrors } from "../reducers/errors";
import jwtDecode from "jwt-decode";
import { setUser } from "../reducers/auth";
import swal from "sweetalert";
import { setAuthToken } from "../../lib/setAuthToken";
/* login action */

export const LoginRegister = (form) => async (dispatch) => {
  await axios
    .post("/api/login", form)
    .then((res) => {
      const { token } = res.data;
      const decoded = jwtDecode(token);
      localStorage.setItem("token", token);
      dispatch(setUser(decoded));
      setAuthToken(token);
      dispatch(setErrors({}));
      window.location.href = "/";
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

/* check mail action */

export const CheckMail = (form) => async (dispatch) => {
  await axios
    .post("/api/__check_mail", form)
    .then((res) => {
      swal("Success", res.data.message);
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

/* reset action  */

export const ResetAction = (form, email, token) => async (dispatch) => {
  await axios
    .post(`/api/__reset_password?email=${email}&token=${token}`, form)
    .then((res) => {
      swal("Check ....", res.data.message);
      window.location.href = "/";
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

export const Logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  window.location.href = "/auth/SignIn";
};
