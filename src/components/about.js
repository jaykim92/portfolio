import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

// import image
import aboutPic from "../assets/aboutPic.jpg";

const useStyles = makeStyles({
  aboutDiv: {
    width: "70vw",
    fontSize: "20px"
  },
  picStyling: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  center: {
    display: "flex",
    justifyContent: "center"
  },
  skillsBox: {
    backgroundColor: "pink",
    height: "10vh",
    color: "white",
    marginTop: "2rem"
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
      >
        <div className={classes.aboutDiv}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h1 style={{ textAlign: "center", fontSize: "55px" }}>
                About Me
              </h1>
            </Grid>
            <Grid item xs={12} md={3} className={classes.center}>
              <img
                src={aboutPic}
                alt="self portrait"
                className={classes.picStyling}
              ></img>
            </Grid>
            <Grid item xs={12} md={9}>
              <p>
                Hi, I'm Jay. I am a full stack developer in sunny Orange County,
                CA. I enjoy seeing dreams slowly come to life and would love to
                work with you on your next project!
              </p>
              <p>
                These are some languages and technologies I've used for my
                previous projects:
              </p>
              <Grid container>
                <Grid item xs={3}>
                  <p>HTML5</p>
                </Grid>
                <Grid item xs={3}>
                  CSS3
                  <p>CSS3</p>
                </Grid>
                <Grid item xs={3}>
                  JavaScript
                </Grid>
                <Grid item xs={3}>ReactJS</Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box
        className={classes.skillsBox}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Skills</h1>
      </Box>

      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}

export default About;
