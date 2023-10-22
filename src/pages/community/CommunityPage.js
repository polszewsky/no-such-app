import { Grid, Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import FacebookIcon from "@mui/icons-material/Facebook";
import { community } from "../../components/Community";
import Co2Icon from '@mui/icons-material/Co2';
import TokenIcon from '@mui/icons-material/Token';
import PercentIcon from '@mui/icons-material/Percent';

export default function CommunityPage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
<<<<<<< HEAD
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
      <Grid item container spacint={2} marginTop={2} >
        <Grid item xs={12}>
        <Card elevation={3} sx={{ minWidth: 300, marginTop: 2, bgcolor: "#42a5f5" }}>
              <CardContent>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Typography
                    sx={{ fontSize: 25 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Your statistics
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6"><b>CO2</b></Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6"><b>Tokens</b></Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6"><b>Better than</b></Typography>
                  </Grid>
                </Grid>
               <hr/>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography sx={{ fontSize: 20 }} >157</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: 20 }}>5069</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: 20 }}>72%</Typography>
                  </Grid>
=======
      <Grid item container marginTop={2} direction="row">
        <Grid item xs={12}>
          <Card
            elevation={3}
            sx={{
              minWidth: 300,
              marginTop: "0.5rem",
              backgroundColor: "#2f6271",
              color: "#f4f4f4",
            }}
          >
            <CardContent>
              <Grid
                container
                item
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Typography variant="h3" gutterBottom sx={{ color: "#eee" }}>
                  Your Stats
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h6">
                    <b>CO2 (kg)</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <b>Tokens</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <b>Better than</b>
                  </Typography>
>>>>>>> master
                </Grid>
              </Grid>
              <hr />
              <Grid
                container
                item
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h6">157</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">5069</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">72%</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        item
        direction="row"
        sx={{ marginTop: "1rem", marginBottom: "-1rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle2">Friends</Typography>
        </Grid>
      </Grid>

      <Grid container item direction="row">
        <Grid item xs={12}>
          {community.people.map((element, index) => (
            <Card elevation={3} sx={{ minWidth: 300, marginTop: 2 }}>
              <CardContent>
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={`https://i.pravatar.cc/150?img=${index * 15}`}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography
                    sx={{ fontSize: 22 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <b>{element.name} {element.surname}</b>
                  </Typography>
                </Grid>
                <hr />
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography sx={{ fontSize: 20 }}>{element.CO2}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: 20 }}>{element.points}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: 20 }}>{element.betterThan}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
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
    </Grid>
  );
}
