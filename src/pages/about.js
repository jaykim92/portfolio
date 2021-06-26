import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  aboutDiv: {
    width: "80vw",
    fontSize: "20px"
  }
});

function About() {
  const classes = useStyles();
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        id="about"
        style={{ height: "50vh" }}
      >
        <div className={classes.aboutDiv}>
          Hi, I'm Jay. I am a full stack developer in sunny Orange County, CA. I
          enjoy seeing dreams slowly come to life and would love to work with
          you on your next project! I come from a background of cognitive
          psychology and I am known for delivering user-focused designs through
          researching, iterating, and testing. Looking forward to help your
          ideas reach their maximum potential.
          <hr></hr>
          <Grid>
            <Grid item>hello</Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default About;
