import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from "@mui/material";

export default function PastAndFutureTravels({listOfTravels}) {
    return (
        <Grid item spacing={3}>
            {listOfTravels.travels.map(element => (
                <Accordion spacing={3} style={{width: "350px"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography item>{element.date}: {element.from} - {element.to}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <b>C02: </b>{element.CO2} kg
                  </Typography>
                  <Typography>
                    <b>Transportation:</b> {element.type}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Grid>
    );
}