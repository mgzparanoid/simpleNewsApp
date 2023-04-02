import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { CurrentTime } from "../utils/CurrentTime";

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
          <Grid item xs={5} />
          <Grid item xs={6}>
            <Typography color="white" variant="subtitle1">
              Number of projects:
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ float: "right" }}>
            <Typography color="white" variant="subtitle1">
              <CurrentTime />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
