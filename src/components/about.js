import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

// import internal/custom component
import Skills from "../components/skills";

// import image
import aboutPic from "../assets/aboutPic.jpg";

const useStyles = makeStyles({
  aboutDiv: {
    width: "80vw",
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
  aboutBanner: {
    textAlign: "center",
    fontSize: "55px",
    marginBottom: "-1rem"
  }
});

function About() {
  const classes = useStyles();
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <Box justifyContent="center" alignItems="center" display="flex" id="about">
        <div className={classes.aboutDiv}>
          <Grid
            container
            spacing={5}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              <h1 className={classes.aboutBanner}>About Me</h1>
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
                Hi, I'm Jay! I am a full stack developer from sunny Orange
                County, California. I build clean, user-focused interfaces and
                help clients maximize their web presence and highlight the
                importance of their organization. Let's talk about turning your
                ideas into code! Check out some of my previous work below.
              </p>
            </Grid>
            <Grid item>
              <Skills />
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default About;
