import { Grid, TextField } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GarageIcon from '@mui/icons-material/Garage';
import StartIcon from '@mui/icons-material/Start';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';

export default function AddTravelPage() {
  return <Grid container spacing={5} direction="column" alignItems="center" justifyContent="center">
    <h1 justifyContent="center" alignItems="center" spacing={5} style={{ marginTop: 50 }}>Add next travel</h1>
    <Grid justifyContent="center" item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <DirectionsCarIcon sx={{mr: 1, my: 0.5 }} />
        <TextField variant="standard" label="Type of vehicle" style={{marginRight: 5}}/>
    </Grid>
    <Grid justifyContent="center" item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <GarageIcon sx={{mr: 1, my: 0.5 }}/>
        <TextField variant="standard" label="Your vehicles" style={{marginRight: 5}}/>
    </Grid>
    <Grid justifyContent="center" item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <GarageIcon sx={{mr: 1, my: 0.5 }}/>
        <TextField variant="standard" label="Average fuel consumption" style={{marginRight: 5}}/>
    </Grid>
    <Grid justifyContent="center" item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <StartIcon sx={{mr: 1, my: 0.5 }}/>
        <TextField variant="standard" label="Starting location" style={{marginRight: 5}}/>
    </Grid>
    <Grid justifyContent="center" item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SportsScoreIcon sx={{mr: 1, my: 0.5 }}/>
        <TextField variant="standard" label="Destination " style={{marginRight: 5}}/>
    </Grid>
    <Grid container direction="row" alignItems="center" justifyContent="center" item xs={12} >
        <Button variant="outlined" startIcon={<CreateIcon style={{fontSize: 36}} />}>
            Create
        </Button>
    </Grid>

  </Grid>;
}
