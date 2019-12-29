import React from "react";

import { Feed, Input, Loader } from "semantic-ui-react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { getComments } from "../../../services/commentService";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-IN");

const MyFeed = props => {
  const allCommentsOnthis = useStoreState(state => state.comments.all);
  const setComments = useStoreActions(action => action.comments.setComments);
  const thisTeam = useStoreState(state => state.team.current_team);
  const teamMates = useStoreState(state => state.team.current_team.team_mates);

  const fetchComments = async (teamId, problem_id) => {
    const response = await getComments(teamId, problem_id);
    if (response.status === 200) {
      setComments(response.data);
    }
  };

  useEffect(() => {
    fetchComments(thisTeam.id, props.problem_id);
  }, [props]);

  return (
    <Feed>
      {allCommentsOnthis.length === 0 ? (
        <div>
          No Comments
          <br />
        </div>
      ) : (
        allCommentsOnthis.map(item => {
          const user = teamMates.filter(user_item => {
            return user_item.id === item.teammate;
          })[0];

          return (
            <Feed.Event>
              <Feed.Label
                image={`https://react.semantic-ui.com/images/avatar/small/${user.team_member.avatar}`}
              />
              <Feed.Content>
                <Feed.Summary>
                  <span>
                    {user.team_member.user.first_name}{" "}
                    {user.team_member.user.last_name}
                  </span>
                  <Feed.Date>
                    {timeAgo.format(new Date(item.updated_at))}
                  </Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{item.comment}</Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          );
        })
      )}

      <br />
      <Input
        action={{ icon: "caret right" }}
        placeholder="Add Comment..."
        fluid
      />
    </Feed>
  );
};

export default MyFeed;
