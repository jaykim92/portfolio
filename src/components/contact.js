import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// custom css styling
const useStyles = makeStyles({});

function Contact() {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="center" id="contact">
        <h1 style={{ fontSize: "50px" }}>Get in Touch</h1>
      </Box>
    </>
  );
}

export default Contact;
