import httpService from "./httpService";
import APIURL from "../utils/apiUrl";

const joinTeam = async teamKey => {
  const response = await httpService
    .post(APIURL.TEAM_OPS, {
      create: "false",
      name: "",
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

// const leaveTeam = async teamId => {
//   const response = await httpService
//     .delete(APIURL.TEAM_OPS, {
//       create: "false",
//       name: teamName,
//       key: ""
//     })
//     .catch(error => {
//       if (error.response) {
//         return error.response;
//       }
//     });

//   return response;
// };

const getTeams = async () => {
  const response = await httpService
    .get(APIURL.TEAM_OPS + "list/")
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

const getTeamMates = async teamId => {
  const response = await httpService
    .get(APIURL.TEAM_OPS + `${teamId}/`)
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });

  return response;
};

export { joinTeam, createTeam, getTeams, getTeamMates };
