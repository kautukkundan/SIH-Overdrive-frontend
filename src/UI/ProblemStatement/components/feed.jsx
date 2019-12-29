import React from "react";

import { Feed, Input, Form } from "semantic-ui-react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { getComments, postComments } from "../../../services/commentService";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useState } from "react";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-IN");

const MyFeed = props => {
  const allCommentsOnthis = useStoreState(state => state.comments.all);
  const setComments = useStoreActions(action => action.comments.setComments);
  const thisTeam = useStoreState(state => state.team.current_team);
  const teamMates = useStoreState(state => state.team.current_team.team_mates);

  const [newComment, setNewComment] = useState("");

  const fetchComments = async (teamId, problem_id) => {
    const response = await getComments(teamId, problem_id);
    if (response.status === 200) {
      setComments(response.data);
    }
  };

  const addComment = async () => {
    const response = await postComments(
      thisTeam.id,
      props.problem_id,
      newComment
    );
    if (response.status === 201) {
      setNewComment("");
      console.log(newComment);
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
        allCommentsOnthis.map((item, index) => {
          const user = teamMates.filter(user_item => {
            return user_item.id === item.teammate;
          })[0];

          return (
            <Feed.Event key={index}>
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
      <Form>
        <Input
          action={{ icon: "caret right", onClick: () => addComment() }}
          placeholder="Add Comment..."
          fluid
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
      </Form>
    </Feed>
  );
};

export default MyFeed;
