import httpService from "./httpService";
import APIURL from "../utils/apiUrl";

const joinTeam = async (teamName, teamKey) => {
  const response = await httpService
    .post(APIURL.TEAM_OPS, {
      create: "false",
      name: teamName,
      key: teamKey
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });

  return response;
};

const createTeam = async teamName => {
  const response = await httpService
    .post(APIURL.TEAM_OPS, {
      create: "true",
      name: teamName,
      key: ""
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });

  return response;
};

export { joinTeam, createTeam };
