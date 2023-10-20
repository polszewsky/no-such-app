import { Grid, TextField } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GarageIcon from "@mui/icons-material/Garage";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import StartIcon from "@mui/icons-material/Start";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import cars from "../../../components/UserVehicles"
import types from "../../../components/VehicleTypes"

export default function AddTravelPage() {
  return (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <h1 alignItems="center" style={{ marginTop: 50 }}>
        Add next travel
      </h1>
      <Grid
        justifyContent="center"
        item style={{width: "300px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <DirectionsCarIcon sx={{ mr: 1, my: 0.5 }} />
        <FormControl fullWidth>
          <InputLabel variant="standard">
            Vehicle type
          </InputLabel>
          <NativeSelect
            placeholder="Vehicle type"
          >
            <option >{types[0]}</option>
            <option >{types[1]}</option>
            <option >{types[2]}</option>
            <option >{types[3]}</option>
            <option >{types[4]}</option>
            <option >{types[5]}</option>
          </NativeSelect>
          </FormControl>
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "300px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <GarageIcon sx={{ mr: 1, my: 0.5 }} />
          <FormControl fullWidth>
          <InputLabel variant="standard">
            Your vehicles
          </InputLabel>
          <NativeSelect
            placeholder="Your vehicles"
          >
            <option value={cars.cars[0].fuelUsage}>{cars.cars[0].brand} {cars.cars[0].model}</option>
            <option value={cars.cars[0].fuelUsage}>{cars.cars[1].brand} {cars.cars[1].model}</option>
            <option value={cars.cars[0].fuelUsage}>{cars.cars[2].brand} {cars.cars[2].model}</option>
            <option value={cars.cars[0].fuelUsage}>{cars.cars[3].brand} {cars.cars[3].model}</option>
          </NativeSelect>
          </FormControl>
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "300px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <LocalGasStationIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          variant="standard"
          label="Average fuel consumption"
          style={{ marginRight: 5, width: "300px" }}
        />
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "300px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <StartIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          variant="standard"
          label="Starting location"
          style={{ marginRight: 5, width: "300px" }}
        />
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "300px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <SportsScoreIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          variant="standard"
          label="Destination"
          style={{ marginRight: 5, width: "300px" }}
        />
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
      >
        <Button
          variant="outlined"
          startIcon={<CreateIcon style={{ fontSize: 36 }} />}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
