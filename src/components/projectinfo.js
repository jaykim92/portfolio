import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// custom css styling
const useStyles = makeStyles({
  projectImg: {
    width: "40vw"
  }
});

function Projectinfo({ data }) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
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
      </Grid>
    </>
  );
}

export default Projectinfo;
