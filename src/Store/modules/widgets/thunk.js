import { createWidget, deleteWidget, GetWidget, updateWidget } from "./actions";
import api from "../../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//POST REQUEST
export const createWidgetThunk = (data) => (dispatch) => {
  api
    .post("/create", data)
    .then((res) => {

      toast.success("Graphic created with success!");
      dispatch(createWidget(res.data));
    })
    .catch((err) => toast.error(JSON.parse(err.request.response).message));
};

//GET REQUEST
export const getWidgetThunk = () => (dispatch) => {
  api
    .get(`/`)
    .then((res) => {
      dispatch(GetWidget(res.data));
    })
    .catch((err) => toast.success('Welcome, let start it?'));
};

//DELETE REQUEST
export const deleteWidgetThunk = (id) => (dispatch) => {
  api
    .delete(`/delete/${id}`)
    .then((_) => {
      toast.success("Graphic deleted, just click in other widget and it will disappear!");
      dispatch(deleteWidget(id));
    })
    .catch((err) => toast.error(JSON.parse(err.request.response).message));
};

//PATCH REQUEST
export const updateWidgetThunk = (id, data) => (dispatch) => {
  api
    .patch(`/edit/${id}`, data)
    .then((res) => {
      toast.success("Graphic updated with success!");
      dispatch(updateWidget(res.data));
    })
    .catch((err) => toast.error(JSON.parse(err.request.response).message));
};

