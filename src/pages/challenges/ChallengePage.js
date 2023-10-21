import { Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import TitleReturnBar from "../../components/TitleReturnBar";
import { useSelector } from "react-redux";
import ChallengeCard from "./ChallengeCard";
import ProcessDialog from "./ProcessDialog";

export default function ChallengePage() {
  const { challenges = [] } = useSelector((state) => state.challenge);

  const [openProcess, setOpenProcess] = useState(false);

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
            />
          ))}
      </Grid>
      <ProcessDialog open={openProcess} />
    </Fragment>
  );
}
