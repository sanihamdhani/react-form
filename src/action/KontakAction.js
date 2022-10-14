import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const getListKontak = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get("http://localhost:3000/person")
      .then((res) => {
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((res) => {
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
          },
        });
      });
  };
};
