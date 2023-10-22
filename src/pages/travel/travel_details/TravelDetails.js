import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import TitleReturnBar from "../../../components/TitleReturnBar";
import { Grid } from "@mui/material";

export default function TravelDetails() {
  let { travelId } = useParams();

  return (
    <Fragment>
      <TitleReturnBar site="Travel Details" />

      <Grid container direction="column">
        <Grid container item direction="row">
          abc {travelId}
        </Grid>
      </Grid>
    </Fragment>
  );
}
