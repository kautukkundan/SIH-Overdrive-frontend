import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";

import ReactGa from "react-ga";
import { useEffect } from "react";

const WelcomeModal = () => {
  useEffect(() => {
    ReactGa.event({
      category: "modal",
      action: "welcome modal"
    });
  }, []);

  return (
    <Modal defaultOpen closeIcon>
      <Modal.Header>Hey Fellow Participant (Do Read Once)</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={process.env.PUBLIC_URL + "/SIHLogo.jpg"}
        />
        <Modal.Description>
          <Header>Why and How to use this platform.</Header>
          <p>
            1. You will find all the problem statements from the official
            website in 1 place
            <br />
            <br />
            2. You can mark progress with each problem statement. You can
            comment and discuss the problems with your team
            <br />
            <br />
            3. You can attach links to your proposal doc and ppt from the
            problem statements page.
            <br />
            <br />
            Get started by creating a team. You can work solo and add team mates
            later. You can also be a part of multiple teams.
          </p>

          <Header>Why Did We Build it?</Header>
          <p>
            We're a duo of hackathon enthusiast and winners of previous SIH
            Editions. We find it tedious to study and look after each and every
            problem statement and have discussion around it with the team.
            <br />
            <br />
            So we thought of making a complete solution where we can view,
            analyze and discuss each problem statement with comfort.
            <br />
            <br />
            <strong>ENJOY and ALL THE BEST for SIH 2020</strong>
          </p>

          <Header>
            Contact Us/Feedback/Bugs/FeatureRequests at{" "}
            <a href="mailto:sihoverdrive@gmail.com">sihoverdrive@gmail.com</a>
          </Header>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default WelcomeModal;
