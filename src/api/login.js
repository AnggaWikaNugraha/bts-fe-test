import axios from "axios";
import { PATH } from "./config";

export function registerAction(values, history) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
     
      axios.post(`${PATH}/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        alert('/Berhasil register')
        history.replace('/login')
      })
      .catch(function (error) {
        console.log(error);
      });

    })
  };
}

export function loginAction(values, history) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
     
      axios.post(`${PATH}/login`, {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        dispatch({
          type: 'STATUS_PAGE_REDUCER_SET_MULTIPLE',
          payload: {
            isAuthenticated: true,
            token: res.data.data.token,
            username: values.username,
          }
        })
        // alert('/Berhasil login')
        history.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });

    })
  };
}
