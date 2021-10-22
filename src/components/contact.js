import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

// custom css styling
const useStyles = makeStyles({
  view: {
    height: "55vh"
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "30px",

    "&:hover": {
      fontSize: "50px"
    }
  }
});

function Contact() {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="center" id="contact">
        <h1 style={{ fontSize: "50px" }}>Get in Touch</h1>
      </Box>
      <div className={classes.view}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            align="center"
            data-aos="fade-right"
            data-aos-offset="300"
          >
              <i class="fas fa-envelope fa-3x" style={{ marginRight: "1rem" }}></i>
              <a
                href="mailto: jaykim92@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Email
              </a>
          </Grid>

          <Grid
            item
            xs={12}
            align="center"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <i class="fab fa-github fa-3x" style={{ marginRight: "1rem" }}></i>
            <a
              href="https://www.github.com/jaykim92"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              Github
            </a>
          </Grid>

          <Grid
            item
            xs={12}
            align="center"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <i
              class="fab fa-linkedin fa-3x"
              style={{ marginRight: "1rem" }}
            ></i>
            <a
              href="https://www.linkedin.com/in/jaykim92"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              LinkedIn
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Contact;
