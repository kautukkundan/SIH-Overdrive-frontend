import APIURL from "../utils/apiUrl";
import http from "./httpService";

const getProblemCount = async () => {
  const response = await http.get(APIURL.PROBLEMS + `count/`).catch(error => {
    if (error.response) {
      return error.response;
    }
  });
  return response;
};

const getStaticProblems = async () => {
  const response = await http.get(APIURL.PROBLEMS + `list/`).catch(error => {
    if (error.response) {
      return error.response;
    }
  });
  return response;
};

const getDynamicProblems = async teamId => {
  const response = await http
    .get(APIURL.PROBLEMS + `data/?team=${teamId}`)
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

const getSingleDynamicProblem = async (teamId, problemId) => {
  const response = await http
    .get(APIURL.PROBLEMS + `${problemId}/?team=${teamId}`)
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

const updateDynamicProblemsSingle = async (teamId, problemId, data) => {
  const response = await http
    .patch(APIURL.PROBLEMS + `${problemId}/`, {
      ...data,
      team: teamId
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

export {
  getProblemCount,
  getStaticProblems,
  getDynamicProblems,
  getSingleDynamicProblem,
  updateDynamicProblemsSingle
};
