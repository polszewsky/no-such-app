import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function DidYouKnow() {
  //List of Colors => 3
  const cardColors = useMemo(() => ["#55efc4", "#a29bfe", "#ffeaa7"], []);

  const { infoList = [] } = useSelector((state) => state.homeInformations);

  const [selectedInfo, setSelectedInfo] = useState({});
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    //RAND 0 to NUMBER OF COLORS/INFO CARDS FROM SLICE
    const selectedIndex = Math.floor(Math.random() * 3);

    setSelectedColor(cardColors[selectedIndex]);

    if (infoList && infoList.length > 1) {
      setSelectedInfo(infoList[selectedIndex]);
    }
  }, [infoList, cardColors]);

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Paper
          sx={{
            padding: "1rem",
            background: `${selectedColor}`,
          }}
          elevation={3}
        >
          <Grid container item direction="row">
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography variant="subtitle2">Did You Know?</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography
                variant="body2"
                sx={{ textTransform: "uppercase", fontSize: "31pt" }}
              >
                {selectedInfo.title ?? ""}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography sx={{ fontWeight: 200 }}>
                {selectedInfo?.description ?? ""}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Button
                variant="text"
                onClick={() =>
                  window.location.replace("https://www.ecosia.org")
                }
              >
                Read more
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
