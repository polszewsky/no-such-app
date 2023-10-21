import { Grid, CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from "@mui/material/Fab";
import FacebookIcon from '@mui/icons-material/Facebook';
import image from "../../components/img/community.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';


export default function CommunityPage() {
  return <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
    <Grid item textAlign="center">
        <Grid item xs={12}>
          <CardMedia
            component="img"
            height="128"
            width="128"
            image={image}
            alt="Paella dish"
            sx={{ objectFit: "contain", paddingTop: "1rem" }}
          />
        </Grid>
        <Grid container xs={12} spacint={2} marginTop={2}>
        <Accordion spacing={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography item>
                Your statistics
              </Typography>
              <SignalCellularAltIcon spacing={3}/>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item justifyContent="center"  xs={12} display={"flex"} width="auto">
              <Typography display="left" marginRight={7}>
                <b>C02: </b>
              </Typography>
              <Typography display="center">
                <b>Points: </b>
              </Typography>
              <Typography display="right" marginLeft={7}>
                <b>Better than:</b>
              </Typography>
              </Grid>
              <Grid item justifyContent="center"  xs={12} display={"flex"} width="auto">
              <Typography display="left" marginRight={7}>
                101kg
              </Typography>
              <Typography display="center">
                3890
              </Typography>
              <Typography display="right" marginLeft={7}>
                73%
              </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} spacing={2}>
          <Card sx={{ minWidth: 300, marginTop: 3 }}>
            <CardContent>
              <Grid item display={"flex"} justifyContent="center">
                <PersonIcon/>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Alice Springfield
                </Typography>
              </Grid>
              <hr/>
              <Grid item spacing={2} xs={12} justifyContent="center" display={"flex"} width="auto">
                <Typography display="left" marginRight={7}>124kg</Typography>
                <Typography display="center">2341</Typography>
                <Typography display="right" marginLeft={7}>61%</Typography>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 300, marginTop: 3 }}>
            <CardContent>
              <Grid item display={"flex"} justifyContent="center">
                <PersonIcon/>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Bob Raider
                </Typography>
              </Grid>
              <hr/>
              <Grid item spacing={2} xs={12} justifyContent="center" display={"flex"}>
                <Typography textAlign="left" marginRight={7}>490kg</Typography>
                <Typography textAlign="center">8009</Typography>
                <Typography textAlign="right" marginLeft={7}>11%</Typography>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 300, marginTop: 3 }}>
            <CardContent>
              <Grid item display={"flex"} justifyContent="center" >
                <PersonIcon/>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                  Alice Cutter
                </Typography>
              </Grid>
              <hr/>
              <Grid item spacing={2} xs={12} justifyContent="center" display={"flex"}>
                <Typography textAlign="left" marginRight={6}>230kg</Typography>
                <Typography textAlign="center">6888</Typography>
                <Typography textAlign="right" marginLeft={6}>39%</Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    <Grid item>
    <Fab
        color="primary"
        aria-label="add"
        variant="extended"
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(9),
          right: (theme) => theme.spacing(2),
        }}
      >
      <FacebookIcon sx={{ mr: 1 }} style={{ fontSize: 42 }} />
      Synchronized with facebook
        </Fab>
    </Grid>
  </Grid>;
}
