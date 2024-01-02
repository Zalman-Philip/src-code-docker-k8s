import axios from "axios";
import {BASE_URL} from "../../../api/api";
const URL = `${BASE_URL}/orders`;

const editsOrderDetails = (
  orderId: string,
  orderStatus: Record<string, unknown>
) => {
  axios
    .put(`${URL}/${orderId}`, orderStatus)
    .then(() => {
      console.log("Success");
    })
    .catch((error) => {
      console.error(
        error.message,
        "Error connecting to the orders status server"
      );
    });
};

export default editsOrderDetails;
