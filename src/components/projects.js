import React from "react";

// import background image
import Projectsbg from "../assets/projectsbg.jpg";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// import internal components
import Projectinfo from "./projectinfo";
import Contact from "./contact";

// import json file with information for each project to be mapped
import projectinfo from "../utils/projectinfo.json";

// custom css styling
const useStyles = makeStyles({
  projectsBackground: {
    backgroundImage: `url(${Projectsbg})`
  }
});

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.projectsBackground} id="projects">
      <Box display="flex" justifyContent="center">
        <h1 style={{ fontSize: "50px" }}>Portfolio</h1>
      </Box>
      {projectinfo.map((item, i) => (
        <Projectinfo key={i} data={item} />
      ))}
      <Contact />
    </div>
  );
}

export default Projects;
