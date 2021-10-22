import React from "react";

// import page components
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";

// import components from material-ui
import { makeStyles } from "@material-ui/core/styles";

// css styling
const useStyles = makeStyles({
  width: {
    width: "100vw",
    overflowX: "hidden"
  }
})

function Front() {
  const classes = useStyles();

  return (
    <div className={classes.width}>
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Front;
