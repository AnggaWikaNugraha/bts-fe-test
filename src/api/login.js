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

export function createCeklisAction(values, history) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {

      const { StatusPageReducer } = getState();
      const config = {
        headers: { Authorization: `Bearer ${StatusPageReducer.token}` }
      };

      axios.post(`${PATH}/checklist`, {
        name: values.name,
      }, config)
      .then((res) => {
        dispatch(getCeklisAction());
        alert('/Berhasil create ceklist')
      })
      .catch(function (error) {
        console.log(error);
      });

    })
  };
}

export function getCeklisAction() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {

      const { StatusPageReducer } = getState();
      const config = {
        headers: { Authorization: `Bearer ${StatusPageReducer.token}` }
      };

      axios.get(`${PATH}/checklist`, config)
      .then((res) => {
        dispatch({
          type: 'SET_DATA_CEKLIS',
          payload: res.data.data,
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    })
  };
}
