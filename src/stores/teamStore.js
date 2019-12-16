import { action } from "easy-peasy";

export default {
  all_teams: null,
  current_team: {
    id: null,
    name: null,
    key: null
  },
  team_mates: null,

  setAllTeams: action((state, teams) => {
    state.all_teams = teams;
    state.current_team.id = teams.slice(-1)[0].team.id;
    state.current_team.name = teams.slice(-1)[0].team.name;
    state.current_team.key = teams.slice(-1)[0].team.key;
  }),
  setAllTeamMates: action((state, teamMates) => {
    state.team_mates = teamMates;
  }),
  setCurrentTeam: action((state, current_team) => {
    state.current_team.id = current_team.id;
    state.current_team.name = current_team.name;
    state.current_team.key = current_team.key;
  })
};
