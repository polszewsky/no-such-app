import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";

const StyledCircle = styled("span")({
  height: "250px",
  width: "250px",
  backgroundColor: "#2f6271",
  borderRadius: "50%",

  fontSize: "54pt",
  color: "#fbfbfb",

  /* its children will be flex items */
  display: "flex",
  /* place items in column */
  flexDirection: "column",
  /* center flex items horizontally */
  alignItems: "center",
  /* center all content vertically */
  justifyContent: "center",

  webkitBoxShadow: "4px 4px 63px -8px rgba(37,78,90, 1)",
  mozBoxShadow: "4px 4px 63px -8px rgba(37,78,90, 1)",
  boxShadow: "4px 4px 63px -8px rgba(37,78,90, 1)",
});

export default function PointsIndex({ points = 0, label = "" }) {
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <StyledCircle>
          {points}
          {label !== "" && (
            <>
              <br />
              <span
                style={{
                  fontSize: "11pt",
                  fontWeight: 200,
                  letterSpacing: "1px",
                }}
              >
                TOKENS
              </span>
            </>
          )}
        </StyledCircle>
      </Grid>
    </Grid>
  );
}