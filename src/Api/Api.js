import { instance, notification } from "./instanse.jsx";

export const getMovie = async () => {
  try {
    const res = await instance.get('Movies/getMovie');
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};

export const addMovie = async (data) => {
  try {
    const res = await instance.post(`Movies/createMovie`,data);
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};
export const updateMovie = async (id, data) => {
    try {
      const res = await instance.put(`Movies/updateMovie?id=${id}`, data);
      return res;
    } catch (error) {
      notification(error.response?.status, error.message);
    }
};

export const deleteMovie = async (itemId) => {
  try {
    const res = await instance.delete(`Movies/deleteMovie?id=${itemId}`);
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};


export const getUsers = async () => {
  try {
    const res = await instance.get('Users/getUsers');
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};

export const addUser = async (data) => {
  try {
    const res = await instance.post(`Users/createUser`, data);
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};
export const updateUser = async (id, data) => {
    try {
      const res = await instance.put(`Users/updateUser?id=${id}`, data);
      return res;
    } catch (error) {
      notification(error.response?.status, error.message);
    }
};

export const deleteUser = async (itemId) => {
  try {
    const res = await instance.delete(`Users/deleteUser?id=${itemId}`);
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};

export const getTickets = async () => {
  try {
    const res = await instance.get('Tickets/getTickets');
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};

export const addTicket = async (data) => {
  try {
    const res = await instance.post(`Tickets/createTicket`, data);
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};
export const updateTicket = async (id, data) => {
    try {
      const res = await instance.put(`Tickets/updateTicket?id=${id}`, data);
      return res;
    } catch (error) {
      notification(error.response?.status, error.message);
    }
};

export const deleteTicket = async (itemId) => {
  try {
    const res = await instance.delete(`Tickets/deleteTicket?id=${itemId}`);
    return res;
  } catch (error) {
    notification(error.response?.status, error.message);
  }
};