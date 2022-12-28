import { CREATE, DELETE, GET, UPDATE } from "./actionType";

export const createWidget = (data) => ({
  type: CREATE,
  data,
});

export const deleteWidget = (id) => ({
  type: DELETE,
  id,
});

export const updateWidget = (data) => ({
  type: UPDATE,
  data,
});

export const GetWidget = (data) => ({
  type: GET,
  data,
});
