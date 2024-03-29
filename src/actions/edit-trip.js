import { API_BASE_URL } from "../config";

export const EDIT_TRIP_DESCRIPTION = "EDIT_TRIP_DESCRIPTION";
export const editTripDescription = () => ({
  type: EDIT_TRIP_DESCRIPTION
});

export const EDIT_TRIP_SUCCESS = 'EDIT_TRIP_SUCCESS'
export const editTripSuccess = data => ({
    type: EDIT_TRIP_SUCCESS,
    data
});

export const EDIT_TRIP_ERROR = 'EDIT_TRIP_ERROR'
export const editTripError = error => ({
    type: EDIT_TRIP_ERROR,
    error
});

export const EDIT_NAME_REQUEST = 'EDIT_NAME_REQUEST'
export const editTripName = () => ({
  type: EDIT_NAME_REQUEST
})

export const EDIT_TRIP_DESTINATION = "EDIT_TRIP_DESTINATION";
export const editTripDestination = () => ({
  type: EDIT_TRIP_DESTINATION
});

export const EDIT_TRIP_ARRIVAL = "EDIT_TRIP_ARRIVAL";
export const editTripArrival = () => ({
  type: EDIT_TRIP_ARRIVAL
});

export const editTripById = (data, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/trips/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      if (
        res.headers.has("content-type") &&
        res.headers.get("content-type").startsWith("application/json")
      ) {
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return res.json();
  })
  .then(json => dispatch(editTripSuccess(json)))
  .catch(err => dispatch(editTripError(err)));
};
