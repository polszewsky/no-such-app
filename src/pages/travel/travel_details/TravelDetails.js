import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import TitleReturnBar from "../../../components/TitleReturnBar";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function TravelDetails() {
  let { travelId } = useParams();

  const { pastTravels = [] } = useSelector((state) => state.userTravel);

  const [selectedTravel, setSelectedTravel] = useState({});

  useEffect(() => {
    if (travelId) {
      const filteredTravel = pastTravels.filter((t) => t.id === travelId);
      setSelectedTravel(filteredTravel);
    }
  }, [travelId, pastTravels]);

  const url =
    "https://www.google.com/maps/dir/Łódź/Sofia,+Wierzbińska+66,+95-070+Aleksandrów+Łódzki/@51.7758347,19.371299,12z/data=!4m8!4m7!1m2!1m1!1s0x471bcb24754556af:0xcb7cae639b21dbac!1m2!1m1!1s0x471bb366f5e4515f:0x787518eaa2f73db5!3e0&output=embed";

  return (
    <Fragment>
      <TitleReturnBar site="Travel Details" />

      <Grid container direction="column">
        <Grid container item direction="row">
          <iframe
            title="googleMap"
            src={url}
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Grid>
      </Grid>
    </Fragment>
  );
}
