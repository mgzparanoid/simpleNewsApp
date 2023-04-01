import {
  BottomNavigation,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import getDate from "../utils/getDate";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1976d2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="row" alignItems="center">
          <Grid item xs={3}>
            <Typography color="white" variant="subtitle1">
              Footer
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="white" variant="subtitle1">
              {getDate()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
