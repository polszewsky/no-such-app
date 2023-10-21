import * as React from 'react';
import { Grid } from "@mui/material";
import PointsIndex from "../../pages/home/PointsIndex"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import pastTravels from './PastTravelJSON'
import futureTravels from './FutureTravelJSON';
import PastAndFutureTravels from "./PastAndFutureTravels";

export default function TravelPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event,
    newValue
  ) => {
    setValue(newValue);
  };

  return <Grid container spacing={5} direction="column" alignItems="center" justifyContent="center">
        <PointsIndex points="47"/>
        <Grid item>
          <ToggleButtonGroup
            color="primary"
            value={value}
            exclusive
            onChange={handleChange}>
              <ToggleButton value={0}>Completed travels</ToggleButton>
              <ToggleButton value={1}>Future travels</ToggleButton>
              </ToggleButtonGroup>
        </Grid>
        {value === 0 ? <PastAndFutureTravels listOfTravels={pastTravels} /> : <PastAndFutureTravels listOfTravels={futureTravels} />}
  </Grid>;
}
