import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { addProducts } from "./productReducer";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log(user)
    const res = await publicRequest.post("auth/login", user);
    console.log(res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  };
};

export const getListProducts = async (dispatch) => {
  try{
    const res = await publicRequest.get("products");
    console.log(res.data)
    dispatch(addProducts(res.data))
  }catch(err) {
    console.error("error from getListProducts") 
  }
}