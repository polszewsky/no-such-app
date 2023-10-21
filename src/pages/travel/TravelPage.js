import * as React from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import pastTravels from "./PastTravelJSON";
import futureTravels from "./FutureTravelJSON";
import PastAndFutureTravels from "./PastAndFutureTravels";

export default function TravelPage() {
  const [currentTab, setValue] = React.useState(1);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Grid container item direction="row">
        <Grid item xs={12}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <Tab value={0} label="Completed" />
            <Tab value={1} label="Todays" />
            <Tab value={2} label="Future travels" />
          </Tabs>
        </Grid>
      </Grid>

      {currentTab === 0 && (
        <PastAndFutureTravels listOfTravels={pastTravels} showPoints />
      )}
      {currentTab === 1 && <>No travels today</>}
      {currentTab === 2 && (
        <PastAndFutureTravels listOfTravels={futureTravels} />
      )}
    </Grid>
  );
}
