import React from 'react'
import axios from "axios";
import actions from './product.action'


export const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
        // const {
        //   userSignin: { userInfo },
        // } = getState();
        const { data } = await axios.delete(
          `http://localhost:3000/products/delete/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({ type: "DELETE_PRODUCT", payload: data });
      } catch (error) {
        dispatch({ type: "DELETE_PRODUCT_FAIL", payload: error.message });
      }
  }