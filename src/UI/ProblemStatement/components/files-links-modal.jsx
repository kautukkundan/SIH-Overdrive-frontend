import React from "react";
import { Modal, Button, Header, Form } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";
import { updateDynamicProblemsSingle } from "../../../services/problemStatementService";
import { useStoreState, useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";

const FileLinksModal = props => {
  const [docLink, setDocLink] = useState("");
  const [pptLink, setPptLink] = useState("");

  const [loading, setLoading] = useState(false);

  const thisTeam = useStoreState(state => state.team.current_team);
  const updateLink = useStoreActions(action => action.problems.updateLink);

  useEffect(() => {
    setDocLink(props.document);
    setPptLink(props.presentation);
  }, [props]);

  const updateLinks = async () => {
    setLoading(true);
    const links = {
      presentation: pptLink,
      document: docLink
    };
    const response = await updateDynamicProblemsSingle(
      thisTeam.id,
      props.problem_id,
      links
    );

    if (response.status === 200) {
      toast.success("Links Updated !", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else if (response.status === 400) {
      const data = Object.keys(response.data);
      data.map(item => {
        toast.error(`${item} ${response.data[item]}`, {
          position: toast.POSITION.TOP_RIGHT
        });
        return null;
      });
    }
    const payload = {
      problem_id: props.problem_id,
      links: links
    };
    updateLink(payload);
    setLoading(false);
  };

  return (
    <Modal
      trigger={<Button color="teal">Add/Update File Links</Button>}
      closeIcon
    >
      <Header>Edit File Links for this problem statement</Header>
      <Modal.Content>
        <Header>You can add Links to Google Docs for easier access</Header>
        <Form>
          <label>Google Doc link (Document)</label>
          <input
            placeholder="Doc link"
            defaultValue={props.document}
            onChange={e => setDocLink(e.target.value)}
          />
          <br />
          <br />
          <label>Google Slides link (Presentation/ppt)</label>
          <input
            placeholder="Ppt link"
            defaultValue={props.presentation}
            onChange={e => setPptLink(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive loading={loading} onClick={() => updateLinks()}>
          Update Links
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default FileLinksModal;
