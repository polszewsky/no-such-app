import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import TitleReturnBar from "../../components/TitleReturnBar";
import RewardDialog from "./RewardDialog";
import { Check, AccessTime } from "@mui/icons-material";

export default function MyRewards() {
  const [openClaim, setOpenClaim] = useState(false);
  const handleClickOpen = () => {
    setOpenClaim(true);
  };

  const handleClaimClose = () => {
    setOpenClaim(false);
  };

  return (
    <Fragment>
      <TitleReturnBar site="My Rewards" />

      <Grid container direct="column" spacing={3}>
        <Grid container item direction="row" sx={{ marginTop: "1rem" }}>
          <Grid item xs={12}>
            <Card
              sx={{ minWidth: "100%", background: "#abc6bf" }}
              onClick={() => handleClickOpen()}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://cdn.vox-cdn.com/thumbor/8Df9mD_SJ-MfawE1JGGPZpWx5pQ=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h4">$2 Off Card</Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Chip label="claimed" color="success" icon={<Check />} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Minimal Order Value: USD 10.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container item direction="row">
          <Grid item xs={12}>
            <Card
              sx={{ maxWidth: "100%", background: "#abc6bf" }}
              onClick={() => handleClickOpen()}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://cdn.vox-cdn.com/thumbor/8Df9mD_SJ-MfawE1JGGPZpWx5pQ=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h4">$1 Off Card</Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Chip label="waiting" icon={<AccessTime />} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Minimal Order Value: USD 10.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container item direction="row" sx={{ marginBottom: "5rem" }}>
          <Grid item xs={12}>
            <Card
              sx={{ maxWidth: "100%", background: "#abc6bf" }}
              onClick={() => handleClickOpen()}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://glovoapp.com/images/open-graph-image-glovo.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h4">5% Off Glovo</Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Chip label="claimed" color="success" icon={<Check />} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Minimal Order Value: USD 5.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <RewardDialog open={openClaim} handleClose={handleClaimClose} />
    </Fragment>
  );
}
