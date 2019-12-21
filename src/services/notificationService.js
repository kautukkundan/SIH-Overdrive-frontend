import APIURL from "../utils/apiUrl";
import http from "./httpService";

const getNotifications = async teamId => {
  const response = await http
    .get(APIURL.NOTIFICATIONS + `?team=${teamId}`)
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

const acceptNotification = async id => {
  const response = await http
    .post(APIURL.NOTIFICATIONS, {
      notification: id
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });

  return response;
};

const rejectNotification = async id => {
  const response = await http
    .delete(APIURL.NOTIFICATIONS, {
      data: { notification: id }
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });

  return response;
};

export { getNotifications, acceptNotification, rejectNotification };
