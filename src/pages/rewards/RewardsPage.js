import { Fastfood, Check, CardGiftcard } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Grid, Paper, Typography } from "@mui/material";
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import { useCallback } from "react";
import PaperCard from "../../components/PaperCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PointsIndex from "../home/PointsIndex";

export default function RewardsPage() {
  let match = useRouteMatch();

  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push(`${match.path}/my-rewards`),
    [history, match]
  );

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      sx={{ padding: "1rem" }}
    >
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12}>
          <PointsIndex points="78" label="tokens" />
          {/* <Paper sx={{ padding: "1rem" }}>
            <Grid container item direction="row" justifyContent="space-around">
              <Grid item xs={5}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 500, fontSize: "54pt" }}
                >
                  1 1 3
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography variant="h4"> CO2-KENS</Typography>
              </Grid>
            </Grid>
          </Paper> */}
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ marginTop: "1rem" }}
      >
        <Grid item xs={12}>
          <PaperCard
            actionOnClick={handleOnClick}
            title={
              <>
                My&nbsp;&nbsp;&nbsp;rewards&nbsp;&nbsp;
                <NavigateNextIcon />
              </>
            }
            description="2 / 7"
          />
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Timeline position="right">
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CardGiftcard />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                $10 Gift Card
              </Typography>
              <Typography>1000 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Fastfood />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                15% Off Glovo
              </Typography>
              <Typography>700 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CardGiftcard />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                $5 Gift Card
              </Typography>
              <Typography>500 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <Fastfood />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                10% Off Glovo
              </Typography>
              <Typography>250 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** item */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023-03-12
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <Check />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "green" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                $1 Gift Card
              </Typography>
              <Typography>100 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** item */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023-01-01
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "green" }} />
              <TimelineDot color="success">
                <Check />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "green" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                That's a start!
              </Typography>
              <Typography>10 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** // end */}
        </Timeline>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ marginBottom: "3rem" }}
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "1rem" }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography>Start Here!</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
