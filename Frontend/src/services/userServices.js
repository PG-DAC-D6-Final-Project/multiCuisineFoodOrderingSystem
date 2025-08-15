import axios from "axios";
import { baseUrl } from "./../utils/config";

export const customerLogin = async (email, password) => {
  try {
    const url = baseUrl + "/auth/login";
    const body = {
      email,
      password,
    };
    const response = await axios.post(url, body);

    return response;
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
  address,
}) => {
  try {
    const url = baseUrl + "/user/register";
    const body = {
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
    };

    const response = await axios.post(url, body);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCuisines = async () => {
  try {
    const url = baseUrl + "/cuisine";

    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMenuItemsByCuisineType = async (cuisineTypeId) => {
  try {
    const url = baseUrl + `/menu-item/cuisine/${cuisineTypeId}`;

    const response = await axios.get(url);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getRestaurantById = async (restaurantId) => {
  try {
    const url = baseUrl + `/restaurant/${restaurantId}`;

    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const createOrder = async (body) => {
  try {
    const url = baseUrl + `/order`;

    const response = await axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getOrders = async (userId) => {
  try {
    const url = baseUrl + `/order/customer/${userId}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getMenuItemsByName = async (menuItem) => {
  try {
    const url = baseUrl + `/menu-item/search/${menuItem}`;

    const response = await axios.get(url);

    return response;
  } catch (e) {
    console.log(e);
  }
};
