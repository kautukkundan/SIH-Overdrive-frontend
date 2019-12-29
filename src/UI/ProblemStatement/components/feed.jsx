import React from "react";

import { Feed, Form, Loader, Button, Icon } from "semantic-ui-react";
import TextareaAutosize from "react-textarea-autosize";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { getComments, postComments } from "../../../services/commentService";

import ReactGa from "react-ga";
import Linkify from "react-linkify";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useState } from "react";
import { toast } from "react-toastify";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-IN");

const MyFeed = props => {
  const allCommentsOnthis = useStoreState(state => state.comments.all);
  const me = useStoreState(state => state.user.email);
  const teamMates = useStoreState(state => state.team.current_team.team_mates);
  const thisTeam = useStoreState(state => state.team.current_team);
  const setComments = useStoreActions(action => action.comments.setComments);
  const addNewComment = useStoreActions(
    action => action.comments.addNewComment
  );

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );

  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchComments = async (teamId, problem_id) => {
    setLoading(true);
    const response = await getComments(teamId, problem_id);
    if (response.status === 200) {
      setComments(response.data);
    }
    setLoading(false);
  };

  const addCommentLocal = () => {
    const id = teamMates.filter(item => item.team_member.user.email === me)[0]
      .id;
    const payload = {
      teammate: id,
      comment: newComment,
      updated_at: new Date()
    };
    addNewComment(payload);
  };

  const addComment = async () => {
    ReactGa.event({
      category: "button",
      action: "comment created"
    });

    addCommentLocal();
    setNewComment("");
    const response = await postComments(
      thisTeam.id,
      props.problem_id,
      newComment
    );
    if (response.status !== 201) {
      toast.error("Unable to Post Comment!!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  useEffect(() => {
    fetchComments(thisTeam.id, props.problem_id);
    // eslint-disable-next-line
  }, [props]);

  if (loading) {
    return (
      <div>
        <br />
        <Loader size="medium" inline active />
      </div>
    );
  } else {
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
                  <Feed.Extra text>
                    <Linkify componentDecorator={componentDecorator}>
                      {item.comment}
                    </Linkify>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            );
          })
        )}

        <br />
        <Form>
          <TextareaAutosize
            placeholder="Write Here..."
            fluid
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <br />
          <br />
          <Button
            floated="right"
            icon
            labelPosition="right"
            onClick={() => addComment()}
            size="tiny"
          >
            Add Comment
            <Icon name="caret right" />
          </Button>
        </Form>
      </Feed>
    );
  }
};
export default MyFeed;
