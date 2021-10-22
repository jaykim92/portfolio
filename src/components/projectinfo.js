import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Modal, Button } from "@material-ui/core";

// custom css styling
const useStyles = makeStyles(theme => ({
  projectImg: {
    width: "60vw",
    height: "auto"
  },
  modalStyling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3)
  }
}));

function Projectinfo({ data }) {
  const classes = useStyles();

  //hooks
  const [openProject, setOpenProject] = React.useState(false);
  const handleProjectOpen = () => {
    setOpenProject(true);
  };
  const handleProjectClose = () => {
    setOpenProject(false);
  };

  const modalBody = (
    <div className={classes.paper}>
      <h2>{data.name}</h2>
      <h3>What it is:</h3>
      <p>{data.desc}</p>
      <h3>How it was made:</h3>
      <ul>
        <li>Primary languages: {data.tech1}</li>
        <li>Frameworks: {data.tech2}</li>
        <li>Other technologies: {data.tech3}</li>
      </ul>
      <h3>Where to find it:</h3>
      <div>
        <p>Link to application:</p>
        <a href={data.app} target="_blank" rel="noopener noreferrer">
          {data.app}
        </a>
      </div>
      <div>
        <p>Link to repository:</p>
        <a href={data.repo} target="_blank" rel="noopener noreferrer">
          {data.repo}
        </a>
      </div>
    </div>
  );

  return (
    <div style={{ margin: "auto", width: "75%" }}>
      <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <h2>{data.name}</h2>
          <Grid item xs={12}>
            <Button type="button" onClick={handleProjectOpen}>
              <img
                src={require(`../assets/${data.img}.jpg`).default}
                alt="screenshot of my project"
                className={`${classes.projectImg} ${classes.linkAnimate}`}
              ></img>
            </Button>
          </Grid>

          <Modal
            open={openProject}
            onClose={handleProjectClose}
            aria-labelledby="project-modal"
            aria-describedby="project description"
            className={classes.modalStyling}
          >
            {modalBody}
          </Modal>
        </Grid>
      </div>
    </div>
  );
}

export default Projectinfo;
