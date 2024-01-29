import axios from "axios"
import { ERROR, LODING, LOGIN, POST_BUG, REGISTER } from "./actionType"

const URL = "https://ibm-bug.onrender.com";


export const getLogin = (obj) => (dispatch) => {

    dispatch({ type: LODING })
    return axios.post(`${URL}/user/login`, obj).then((res) => {
        console.log(res.data)
        dispatch({ type: LOGIN })
        localStorage.setItem("bugtoken", (res.data.token))
    }).catch(() => {
        dispatch({ type: ERROR })
    })

}

export const getRegister = (obj) => (dispatch) => {

    dispatch({ type: LODING })

    axios.post(`${URL}/user/register`, obj).then((res) => {
        console.log(res.data);
        dispatch({ type: REGISTER })

    }).catch(() => {
        dispatch({ type: ERROR })
    })

}

export const addBug=(obj)=>(dispatch)=>{

    dispatch({ type: LODING })
   
    axios.post(`${URL}/api/bugs/add`, obj).then((res) => {
        console.log(res.data);
        dispatch({ type:POST_BUG })
    })
    .catch(() => {
        dispatch({ type: ERROR })
    })
}