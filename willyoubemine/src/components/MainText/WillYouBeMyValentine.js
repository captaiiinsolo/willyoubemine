import React from "react";
import { Typography } from "@mui/material";
export default function WillYouBdMyValentine({text}) {
  return (
    <Typography variant="h2" align="center" gutterBottom color="primary">
      {text}
    </Typography>
  );
}