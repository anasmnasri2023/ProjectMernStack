import axios from "axios";
import { setErrors } from "../reducers/errors";
import swal from "sweetalert";
import {
  _AddUser,
  _FilterUser,
  _FindOneUser,
  _FindUsers,
  _setCurrentUser,
} from "../reducers/users";
import { setRefresh } from "../reducers/commons";

export const AddUser = (form, setPopupOpen) => async (dispatch) => {
  await axios
    .post("/api/register", form)
    .then((res) => {
      swal("Success", "User Added successfully", "success");
      dispatch(_AddUser(res.data));

      setPopupOpen(false);
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

export const FindUsers = () => async (dispatch) => {
  await axios
    .get("/api/users")
    .then((res) => {
      const { data } = res.data;
      dispatch(_FindUsers(data));
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

export const FindOneUser = (id) => async (dispatch) => {
  dispatch(setRefresh(true));
  await axios
    .get(`/api/users/${id}`)
    .then((res) => {
      const data = res.data;
      dispatch(_FindOneUser(data));
      setTimeout(() => {
        dispatch(setRefresh(false));
      }, 2000);
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

export const UpdateUser = (form, id, setPopupOpen) => async (dispatch) => {
  dispatch(setRefresh(true));
  await axios
    .put(`/api/users/${id}`, form)
    .then((res) => {
      const { data } = res.data;
      swal("Success", "User Updated successfully" ,"success");
      dispatch(_FindOneUser(data));
      dispatch(FindUsers());
      setTimeout(() => {
        dispatch(setRefresh(false));
      }, 2000);
      setPopupOpen(false);
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
      dispatch(setRefresh(false));
    });
};

export const UpdateMyProfile = (form) => async (dispatch) => {
  await axios
    .put(`/api/profile`, form)
    .then((res) => {
      const { data } = res.data;
      swal("Success", "User Updated successfully" , "success");
      dispatch(_setCurrentUser(data));
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

export const DeleteUsers = (id) => async (dispatch) => {
  if (window.confirm("Do you want to delete this user?")) {
    await axios
      .delete(`/api/users/${id}`)
      .then((res) => {
        swal("Success", "User deleted successfully" , "success");
        dispatch(_FilterUser(id));
      })
      .catch((err) => {
        dispatch(setErrors(err?.response?.data));
      });
  }
};
