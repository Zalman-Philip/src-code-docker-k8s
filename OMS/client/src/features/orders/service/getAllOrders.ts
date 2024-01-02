import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../api/api";
const URL = `${BASE_URL}/orders`;

const getAllOrders = createAsyncThunk("ordersSlice/getAllOrders", async () => {
  try {
    const response = await axios.get(URL);
    console.log("Success");
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error connecting to the orders server");
    throw error;
  }
});

export default getAllOrders;
