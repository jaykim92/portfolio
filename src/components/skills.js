import React from "react";

// import components from material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  skillsBox: {
    backgroundColor: "pink",
    height: "6vh",
    color: "white",
    marginTop: "2rem"
  },
  skillDiv: {
    width: "70vw",
    fontSize: "20px"
  },
  bold: {
    fontWeight: "bold"
  }
});

function Skills() {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.skillDiv}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Box
          className={classes.skillsBox}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <h1>Skills</h1>
        </Box>

        <Grid container align="center">
          <Grid item xs={6} md={3}>
            <p>HTML5</p>
            <i class="fab fa-html5 fa-5x"></i>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>CSS3</p>
            <i class="fab fa-css3-alt fa-5x"></i>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>JavaScript</p>
            <i class="fab fa-js fa-5x"></i>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>ReactJS</p>
            <i class="fab fa-react fa-5x"></i>
          </Grid>

          <Grid item xs={6} md={3}>
            <p>Node.js</p>
            <i class="fab fa-node fa-5x"></i>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>Express.js</p>
            <img
              src={require(`../assets/icons/express.png`).default}
              alt="screenshot of my project"
              style={{ height: "14vh" }}
            ></img>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>MongoDB</p>
            <img
              src={require(`../assets/icons/mongodb.png`).default}
              alt="screenshot of my project"
              style={{ width: "10vw", paddingTop: "1.5rem" }}
            ></img>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>MySQL</p>
            <img
              src={require(`../assets/icons/mysql.png`).default}
              alt="screenshot of my project"
              style={{ width: "9vw" }}
            ></img>
          </Grid>

          <Grid item xs={6} md={3}>
            <p>Bootstrap</p>
            <i class="fab fa-bootstrap fa-5x"></i>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>Material-UI</p>
            <img
              src={require(`../assets/icons/materialui.png`).default}
              alt="screenshot of my project"
              style={{ height: "17vh" }}
            ></img>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>WordPress</p>
            <i class="fab fa-wordpress fa-5x"></i>
          </Grid>
          <Grid item xs={6} md={3} style={{ marginBottom: "4rem" }}>
            <p>Squarespace</p>
            <i class="fab fa-squarespace fa-5x"></i>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Skills;
