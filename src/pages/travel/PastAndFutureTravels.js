import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import PointsIndex from "../home/PointsIndex";

export default function PastAndFutureTravels({
  listOfTravels,
  showPoints = false,
}) {
  return (
    <Grid container item direction="row" spacing={3}>
      {/** Points Index */}
      {showPoints && (
        <Grid item xs>
          <PointsIndex points={122} label="% emissions" />
        </Grid>
      )}

      {/** Tables */}
      <Grid item xs={12}>
        {listOfTravels.travels.map((element) => (
          <Accordion spacing={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography item>
                {element.date}: {element.from} - {element.to}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>C02: </b>
                {element.CO2} kg
              </Typography>
              <Typography>
                <b>Transportation:</b> {element.type}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}
