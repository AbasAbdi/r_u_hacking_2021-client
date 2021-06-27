// CR.js
// Importing the necessary files
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));

// CR function
function CR() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Return for the CR function
  /* It renders material ui's Typography component containing the Copyright information for this application. 
  This component primarily serves as a footer for the entire application. */
  return (
    <div>
      <footer className={classes.footer}>
        <Typography
          position="static"
          variant="body2"
          color="textSecondary"
          align="center"
        >
          Copyright © Billingual Squad.
        </Typography>
      </footer>
    </div>
  );
}
// exporting the CR function
export default CR;
