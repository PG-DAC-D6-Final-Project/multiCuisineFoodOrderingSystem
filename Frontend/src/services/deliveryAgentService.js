import axios from "axios";
import { baseUrl } from "./../utils/config";

export const deliveryAgentLogin = async ({ email, password }) => {
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

export const getAvailableOrders = async () => {
  try {
    const url = baseUrl + "/delivery/availableOrders";

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

export const acceptOrder = async (orderId, deliveryAgentId) => {
  try {
    const url = baseUrl + `/delivery/acceptOrder/${orderId}`;

    const body = {
      deliveryAgentId,
    };

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

export const getActiveOrders = async (deliveryAgentId) => {
  try {
    const url = baseUrl + `/delivery/activeOrders/${deliveryAgentId}`;

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

export const deliverOrder = async (orderId) => {
  try {
    const url = baseUrl + `/delivery/deliverOrder/${orderId}`;

    const response = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getOrderHistory = async (deliveryAgentId) => {
  try {
    const url = baseUrl + `/delivery/orderHistory/${deliveryAgentId}`;

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

export const updateProfile = async ({
  id,
  firstName,
  lastName,
  email,
  phone,
  vehicleNumber,
  vehicleType,
  licenseNumber,
}) => {
  try {
    const url = baseUrl + `/delivery/${id}`;

    const body = {
      firstName,
      lastName,
      email,
      phone,
      vehicleNumber,
      vehicleType,
      licenseNumber,
    };

    console.log(body);

    const response = await axios.put(url, body, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
