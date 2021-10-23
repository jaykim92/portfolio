import React from "react";

import {makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

//custom css styling
const useStyles = makeStyles(theme => ({
    divStyling: {
        textAlign: "center"
    }
}));

function Footer() {
const classes = useStyles();

    return (
        <div className = {classes.divStyling}>
            <p>Jay Kim</p>
            <p>Made with React and Material-UI</p>
        </div>
    );
};

export default Footer;