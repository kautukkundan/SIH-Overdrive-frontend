import APIURL from "../utils/apiUrl";
import http from "./httpService";

const getComments = async (teamId, problemId) => {
  const response = await http
    .get(APIURL.COMMENTS + `${problemId}/?team=${teamId}`)
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

const postComments = async (teamId, problemId, comment) => {
  const response = await http
    .post(APIURL.COMMENTS + `${problemId}/`, {
      team: teamId,
      comment: comment
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

export { getComments, postComments };
