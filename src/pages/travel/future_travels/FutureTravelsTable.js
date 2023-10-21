import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import RecommendCard from "./RecommendCard";
import { surpCoffes } from "../../../components/jsons/SurpApiCoffee";

export default function FutureTravelsTable(props) {
  const { record = {} } = props;

  const recommens = surpCoffes.places;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Plane to Santa Monica - 2023.12.12</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container item direction="row" spacing={3}>
          <Grid item xs={12}>
            Recommended: Train / Car
          </Grid>

          <Grid item xs={12}>
            Recommended: Train / Car
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">Looking for a meal?</Typography>

            {recommens.map((place, index) => (
              <RecommendCard key={index} place={place} />
            ))}

            <Chip
              sx={{ marginTop: "0.5rem" }}
              label="Provided with SerpApi: Google Search API"
              color="primary"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
