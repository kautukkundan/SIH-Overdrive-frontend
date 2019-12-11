import React from "react";
import { Feed, Input } from "semantic-ui-react";

const MyFeed = () => {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
        <Feed.Content>
          <Feed.Summary>
            <a>Kautuk Kundan</a>
            <Feed.Date>3 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
        <Feed.Content>
          <Feed.Summary>
            <a>Bipin Lala</a>
            <Feed.Date>5 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
        <Feed.Content>
          <Feed.Summary>
            <a>Aashita Arora</a>
            <Feed.Date>5 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

      <br />
      <Input placeholder="Add Comment"></Input>
    </Feed>
  );
};

export default MyFeed;
