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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from 'react';

export default function AddTravelPage() {

  const [start, setstart] = useState('');
  const [end, setend] = useState('');
  const [type, settype] = useState('');

  const handlestartChange = event => {
      setstart(event.target.value);
  };

  const handleendChange = event => {
    setend(event.target.value);
  };

  const handletypeChange = event => {
    settype(event.target.value);
  };

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <h1 alignItems="center" style={{ marginTop: 50 }}>
        Add next travel
      </h1>
      <Grid
        justifyContent="center"
        item style={{width: "400px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <DirectionsCarIcon sx={{ mr: 1, my: 0.5 }} />
        <FormControl fullWidth value= {type} onChange= {handletypeChange}>
          <InputLabel variant="standard">
            Travel type
          </InputLabel>
          <NativeSelect
            placeholder="Travel type"
          >
            {types.map(element => (
              <option >{element}</option>
            ))}
          </NativeSelect>
          </FormControl>
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "400px"}}
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
            {cars.cars.map(element => (
              <option value={element.fuelUsage}>{element.brand} {element.model}</option>
            ))}
          </NativeSelect>
          </FormControl>
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "400px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <LocalGasStationIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          variant="standard"
          label="Average fuel consumption"
          style={{ marginRight: 5, width: "400px" }}
        />
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "400px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <StartIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          variant="standard"
          label="Starting location"
          value= {start}
          onChange= {handlestartChange}
          style={{ marginRight: 5, width: "400px" }}
        />
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "400px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <SportsScoreIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          variant="standard"
          label="Destination"
          value= {end}
          onChange= {handleendChange}
          style={{ marginRight: 5, width: "400px" }}
        />
      </Grid>
      <Grid
        justifyContent="center"
        item style={{width: "400px"}}
        xs={12}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker style={{ marginRight: 5}} label="Date of travel" />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
      >
        <Grid item xs={6}>
          <Button
            variant="contained"
            startIcon={<CreateIcon style={{ fontSize: 36, color: "white"}} />}
            sx={{bgcolor: "blue"}}
          >
            <p>Save</p>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            startIcon={<MyLocationIcon style={{ fontSize: 36, color: "white"}} />}
            // onClick={(() => window.open("https://www.google.com/maps?f=d&saddr=" + start + "&daddr=" + end + "&dirflg=d"))}
            onClick={(() => window.open("https://www.google.com/maps/dir/?api=1&origin=" + start + "&destination=" + end + "&travelmode=" + type))}
            sx={{bgcolor: "blue"}}
          >
            <p>Save and navigate</p>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
