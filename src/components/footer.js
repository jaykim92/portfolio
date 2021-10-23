import React from "react";

import {makeStyles } from "@material-ui/core/styles";

//custom css styling
const useStyles = makeStyles(theme => ({
    divStyling: {
        alignContent: "center"
    }
}));

function Footer() {

    return (
        <>
            <p>Jay Kim</p>
            <p>Made with React and Material-UI</p>
        </>
    );
};

export default Footer;