import React from "react";

// import image
import landingImg from "../img/landingImg.jpg";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Link } from "@material-ui/core";

// custom css styling
const useStyles = makeStyles({
  coverImg: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${landingImg})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  textWhite: {
    color: "white"
  },
  linkText: {
      color: "white",
      fontSize: "20px",
      textDecoration: "none"
  }
});

function Landing() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.coverImg}>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          style={{ height: "100vh" }}
          bgcolor="text.disabled"
        >
          <Box textAlign="center" style={{width: "35vw"}}>
            <h1 style={{ fontSize: "70px", margin: "0" }} className={classes.textWhite}>
              Jay Kim
            </h1>
            <p style={{ fontSize: "30px", margin: "1rem" }} className={classes.textWhite}>
              Full Stack Developer
            </p>
            <hr style={{backgroundColor: "white"}}></hr>
            <Grid container direction="row" justify="center" alignItems="center" spacing={5} style={{paddingBottom: "5rem"}}>
            <Grid item xs>
              <Link href="#about" className={classes.linkText}>About</Link>
            </Grid>
            <Grid item xs>
              <Link href="#projects" className={classes.linkText}>Projects</Link>
            </Grid>
            <Grid item xs>
              <Link href="#contact" className={classes.linkText}>Contact</Link>
            </Grid>
          </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Landing;
