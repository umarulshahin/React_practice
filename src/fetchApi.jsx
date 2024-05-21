import axios from "axios";
import {set_data,setLoading,setError} from "./Redux/store";

function fetchApi(){
  return function (dispatch) {
    dispatch(setLoading(true));
    return axios.get('http://localhost:5173/data.json') // Incorrect URL to simulate error
      .then((response) => {
        dispatch(set_data(response.data));
        dispatch(setLoading(false));
      })
      .catch(() => {
        console.error('Error fetching data:');
        dispatch(setLoading(false));
        dispatch(setError("An error occurred"));
      });
  }
}

function deletedata(id){
    return function (dispatch) {
      dispatch(setLoading(true));
      return axios.get('http://localhost:5173/data.json') // Incorrect URL to simulate error
        .then((response) => {
          dispatch(set_data(response.data));
          dispatch(setLoading(false));
        })
        .catch(() => {
          console.error('Error fetching data:');
          dispatch(setLoading(false));
          dispatch(setError("An error occurred"));
        });
    }
  }

  
  export {deletedata, fetchApi};