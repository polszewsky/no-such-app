import { Alert, Grid, Snackbar } from "@mui/material";
import React, { Fragment, useState } from "react";
import TitleReturnBar from "../../components/TitleReturnBar";
import { useSelector } from "react-redux";
import ChallengeCard from "./ChallengeCard";
import ProcessDialog from "./ProcessDialog";

export default function ChallengePage() {
  const { challenges = [] } = useSelector((state) => state.challenge);

  const [openProcess, setOpenProcess] = useState(false);

  const [openShare, setOpenShare] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenShare(false);
  };

  return (
    <Fragment>
      <TitleReturnBar site="Challenges" />
      <Grid container direction="column">
        {challenges.length > 0 &&
          challenges.map((ch, index) => (
            <ChallengeCard
              record={ch}
              key={index}
              openProcessing={setOpenProcess}
              setOpenShare={setOpenShare}
            />
          ))}
      </Grid>

      <Snackbar
        open={openShare}
        onClose={() => setOpenShare(false)}
        handleClose={handleClose}
        autoHideDuration={1500}
        message="Shared on Facebook - Thanks!"
        sx={{ bottom: "65px" }}
      >
        <Alert
          severity="info"
          sx={{ width: "100%", border: "1px solid #4c88c2" }}
        >
          Shared on Facebook - Thanks!
        </Alert>
      </Snackbar>
      <ProcessDialog open={openProcess} />
    </Fragment>
  );
}
