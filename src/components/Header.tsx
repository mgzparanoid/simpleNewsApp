import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setGrid, setList } from "../store/layoutSlice";

const Header: React.FC = () => {
  const layout = useSelector((state: RootState) => state.layout.layoutState);
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const layoutSwitch = () => {
    if (layout === "list") {
      dispatch(setGrid());
    } else {
      dispatch(setList());
    }
  };

  return (
    <AppBar position="static">
      <Grid container>
        <Link to="/">
          <Box
            sx={{
              margin: "10px 0px 0px 10px",
              display: "flex",
              justifyContent: "flex-end",
              width: "200px",
              height: "70px",
            }}
            component="img"
            src="/images/gnstudio.png"
            alt="While-this-is-not-really-a-name-I-have-used-it-instead"
          />
        </Link>
        <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "10px" }}>
          {layout === "list" ? (
            <ListIcon
              onClick={() => layoutSwitch()}
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <GridViewIcon
              onClick={() => layoutSwitch()}
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
          )}
          <InfoIcon
            fontSize="large"
            sx={{ cursor: "pointer" }}
            onClick={() => setIsDialogOpen(true)}
          />
        </Box>
      </Grid>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="md"
      >
        <DialogTitle>What did I find the most difficult/enjoyable?</DialogTitle>
        <DialogContent>
          Certainly the styling as usually I had a predefined figma sketch I
          could rely on, however in this case it was all up to my taste. I'm
          certainly lacking in that department as I tend to spent plenty of time
          making up my mind on what color to use, where to put that button etc,
          that's the reason why I've used inline styling.
          <br />
          <br />
          I've certainly liked the fact that I was able to do so much in such a
          short period of time, also learned a lot from the task.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};
export default Header;
