import {
  DeleteForever,
  DirectionsCar,
  ElectricCar,
  ExpandMore,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../components/img/icon.jpeg";
import ChildrenALessDialog from "../../components/ChildrenALessDialog";
import {
  addUserVehicles,
  removeUserVehicle,
} from "../../reducers/userVehiclesSlice";
import { cars } from "../../components/UserVehicles";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function VehiclesPage() {
  const dispatch = useDispatch();
  const { vehicles = [] } = useSelector((state) => state.userVehicles);

  const [importDialogOpen, setImportDialogOpen] = useState(false);

  const startCarImport = () => {
    setImportDialogOpen(true);

    delay(2000).then(() => {
      dispatch(addUserVehicles(cars.cars));
      setImportDialogOpen(false);
    });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: "1rem" }}
    >
      {/** IMPORT SECTION */}
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <CardMedia
            component="img"
            height="256"
            width="256"
            image={image}
            alt="Paella dish"
            sx={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => startCarImport()}
          >
            Import Vehicles from Android Auto
          </Button>
        </Grid>
      </Grid>

      {/** YOUR CARS SECTION */}
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "2rem" }}
      >
        <Grid item>
          <Typography variant="h2">Your vehicles</Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "1rem" }}>
          {vehicles &&
            vehicles.length > 0 &&
            vehicles.map((v, index) => (
              <Accordion spacing={3} fullWidth key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography item>
                    {(v.engine === "elektryczny" ||
                      v.engine === "hybrydowy") && (
                      <ElectricCar
                        sx={{ marginRight: "1rem" }}
                        color="success"
                      />
                    )}
                    {(v.engine === "benzynowy" || v.engine === "diesel") && (
                      <DirectionsCar
                        sx={{ marginRight: "1rem" }}
                        color="warning"
                      />
                    )}
                    {v?.brand} {v?.model} ( {v?.year} )
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <b>Type:</b> {v.engine}
                  </Typography>
                  <Typography>
                    <b>C02: </b> {v?.CO2 !== 0 ? `${v?.CO2} kg / km` : "N/A"}
                  </Typography>
                  <Typography>
                    <b>Fuel usage: </b>{" "}
                    {v?.fuelUsage !== 0 ? v?.fuelUsage : "N/A"}
                  </Typography>
                  <Typography>
                    <b>Electric usage: </b>{" "}
                    {v?.electricityUsage !== 0 ? v?.electricityUsage : "N/A"}
                  </Typography>
                </AccordionDetails>
                <AccordionActions>
                  <Button
                    startIcon={<DeleteForever />}
                    color="error"
                    onClick={() => dispatch(removeUserVehicle(index))}
                  >
                    Remove Vehicle
                  </Button>
                </AccordionActions>
              </Accordion>
            ))}
        </Grid>
      </Grid>

      <ChildrenALessDialog open={importDialogOpen} title="Importing...">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      </ChildrenALessDialog>
    </Grid>
  );
}
