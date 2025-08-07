import axios from "axios";
import { baseUrl } from "./../utils/config";

export const customerLogin = async (email, password) => {
  try {
    const url = baseUrl + "/user/login";
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

export const customerRegister = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
}) => {
  try {
    const url = baseUrl + "/user";
    const body = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };

    const response = await axios.post(url, body);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
