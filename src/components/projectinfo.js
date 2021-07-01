import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// custom css styling
const useStyles = makeStyles({
  projectImg: {
    width: "40vw",
    height: "8vw"
  },
  linkAnimate: {
    "&:hover": {
      position: "relative",
      marginTop: "-15px"
    }
  }
});

function Projectinfo({ data }) {
  const classes = useStyles();

  return (
    <div style={{ margin: "auto", width: "75%" }}>
      {/* <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12} md={4}>
          <h1>{data.name}</h1>
          <p>{data.desc}</p>
        </Grid>
        <Grid item>
          <img
            src={require(`../assets/${data.img}.jpg`).default}
            alt="screenshot of my project"
            className={classes.projectImg}
          ></img>
        </Grid>
      </Grid> */}

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={10}
      >
        <a
          href="https://dealingwithdivorce.org/"
          className={classes.linkAnimate}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Grid item xs={12} md={7}>
            <img
              src={require(`../assets/dwdss.jpg`).default}
              alt="screenshot of my project"
              className={classes.projectImg}
            ></img>
          </Grid>
        </a>
        <Grid item xs={12} md={5}>
          <h1>Dealing with Divorce</h1>
          <p>
            Website for the nonprofit organization, Dealing with Divorce.
            Collaborated with founders of the program to describe the types of
            services provided by the organization, help redesign and improve
            overall functionality for an existing WordPress website, and stage
            additional e-commerce and donation pages that will be deployed in
            the future.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={10}
      >
        <Grid item xs={12} md={5}>
          <h1>Project FOCUS</h1>
          <p>
            Archive of protocols and procedures for new employees at the
            nonprofit organization, Project FOCUS. This full stack application
            has a search function to easily locate content pertaining to key
            words. Built this project from wireframe to deployment using React,
            React Bootstrap, Express.js, Node.js, and MongoDB Atlas.
          </p>
        </Grid>
        <a
          href="https://fsp-handbook.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkAnimate}
        >
          <Grid item xs={12} md={7}>
            <img
              src={require(`../assets/handbookss.jpg`).default}
              alt="screenshot of my project"
              className={classes.projectImg}
            ></img>
          </Grid>
        </a>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={10}
      >
        <a
          href="https://mxswimms.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkAnimate}
        >
          <Grid item xs={12} md={7}>
            <img
              src={require(`../assets/mxswimmsss.jpg`).default}
              alt="screenshot of my project"
              className={classes.projectImg}
            ></img>
          </Grid>
        </a>
        <Grid item xs={12} md={5}>
          <h1>Mx.Swimms</h1>
          <p>
            Portfolio for music artist, Mx.Swimms. Website displays discography,
            tour dates, photos, and social media links. Designed, coded, and
            deployed using React, Material-UI, and Heroku.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={10}
      >
        <Grid item xs={12} md={5}>
          <h1>Restaurateur</h1>
          <p>
            Website for small restaurant owners who want to upload menu items
            for free. Worked in a team of four to build this full stack
            application. Was primarily responsible for setting up the sign up
            and login system, database, schemas, and routes using a MERN stack.
          </p>
        </Grid>
        <a
          href="https://restaurateurs.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.linkAnimate}
        >
          <Grid item xs={12} md={7}>
            <img
              src={require(`../assets/restaurateurss.jpg`).default}
              alt="screenshot of my project"
              className={classes.projectImg}
            ></img>
          </Grid>
        </a>
      </Grid>
    </div>
  );
}

export default Projectinfo;
