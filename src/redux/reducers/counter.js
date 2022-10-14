// apa kegiatan yang akan dilakukan
import { INCREMENT, DECREMENT } from "../types/conter";

// state yang pertama kali muncul
const initialState = {
  value: "hai",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
export default reducer;
