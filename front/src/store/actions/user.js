import axios from "axios";

const receiveUser = user => ({
  type: "RECEIVE_USER",
  user
});

export const registerUser = state => dispatch =>
  axios.post("/api/createaccount", state).then(user => {
    if (user.data) {
      dispatch(receiveUser(user.data));
    } else alert("Pifiaste gato");
  });

export const logInUser = state => dispatch =>
  axios.post("/api/login", state).then(user => {
    if (user.data) {
      dispatch(receiveUser(user.data));
    } else alert("Pifiaste gato");
  });

export const logOut = state => dispatch =>
  axios.post("/api/logout", state).then(user => {
    if (user.data) {
      dispatch(receiveUser(""));
    } else alert("???");
  });

export const fetchUser = () => dispatch =>
  axios
    .get(`/api/me`)
    .then(res => res.data)
    .then(user => dispatch(receiveUser(user)));
