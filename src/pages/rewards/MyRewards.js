import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import TitleReturnBar from "../../components/TitleReturnBar";

export default function MyRewards() {
  return (
    <Fragment>
      <TitleReturnBar site="My Rewards" />

      <Grid container direct="column" spacing={3}>
        <Grid container item direction="row" sx={{ marginTop: "1rem" }}>
          <Grid item xs={12}>
            <Card sx={{ minWidth: "100%", background: "#abc6bf" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://cdn.vox-cdn.com/thumbor/8Df9mD_SJ-MfawE1JGGPZpWx5pQ=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h4">$2 Gift Card</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container item direction="row">
          <Grid item xs={12}>
            <Card sx={{ maxWidth: "100%", background: "#abc6bf" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://cdn.vox-cdn.com/thumbor/8Df9mD_SJ-MfawE1JGGPZpWx5pQ=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h4" component="div">
                    $1 Gift Card
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
