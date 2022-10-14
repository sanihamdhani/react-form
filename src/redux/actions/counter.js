import { INCREMENT, DECREMENT } from "../types/conter";

// Mengirim sebuah objek dispatch
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
