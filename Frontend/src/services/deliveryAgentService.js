import axios from "axios";
import { baseUrl } from "./../utils/config";

export const deliveryAgentLogin = async ({ email, password }) => {
  try {
    const url = baseUrl + "/delivery/login";
    const body = {
      email,
      password,
    };
    const response = await axios.post(url, body);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deliveryAgentRegister = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
  vehicleType,
  vehicleNumber,
  licenseNumber,
}) => {
  try {
    const url = baseUrl + "/delivery/register";
    const body = {
      firstName,
      lastName,
      email,
      password,
      phone,
      vehicleType,
      vehicleNumber,
      licenseNumber,
    };

    const response = await axios.post(url, body);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
