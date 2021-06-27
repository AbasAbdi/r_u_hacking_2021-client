// Nav.js
// Importing the necessary files
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import React from "react";
import Screen1 from "./Screen1";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

// Nav function
function Nav() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState("home");
  const [stud, setStud] = React.useState("");
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const { user } = useAuth0();
  function fetchUserRecords() {
    axios
      .get("http://localhost:8080/User")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setStud(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }
  function updateLog() {
    return (
      stud.data &&
      stud.data.map((login, idx) => {
        const value = {
          isLogged: "no",
        };
        axios
          .put(`http://localhost:8080/updateUser/${login.cust_id}`, value)
          .then((response) => {
            /* handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);*/
          });

        const value2 = {
          isLogged: "yes",
        };
        axios
          .put(`http://localhost:8080/updateUser/${43}`, value2)
          .then((response) => {
            // handle success
            //  var resData = response.data;
            //let data = JSON.stringify(resData);
            // window.alert("Response recieved from server = " + data);
          });

        return setState("SignOut");
      })
    );
  }

  // Return for the Nav function
  /* Rendering the AppBar and the different links/buttons contained within the Toolbar. When a link/button is clicked
  it set's a different value for the state variable (state) that we declared previously. The value of the state variable (state) then
  defines which component is rendered beneath the AppBar. Since we assigned "home" as the initial value for the state variable (state)
  the Screen1 component will always be rendered beneath the appbar unless the user clicks on one of the links/buttons. */
  return (
    <div id="nav">
      <React.Fragment>
        <CssBaseline />
        {fetchUserRecords()}
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              {
                <img
                  src="https://i.ibb.co/c2WWvby/logo.png"
                  className="App-logo"
                  alt="logo"
                />
              }
            </Typography>
            <nav>
              {stud.data &&
                stud.data.map((cust, idx) => {
                  if (false) {
                    return (
                      <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                        onClick={() => setState("Account")}
                      >
                        My Account
                      </Link>
                    );
                  }
                })}
            </nav>
            {!isAuthenticated ? (
              <Button
                href="#"
                color="primary"
                variant="outlined"
                className={classes.link}
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            ) : (
              <Button
                href="#"
                color="primary"
                variant="outlined"
                className={classes.link}
                onClick={() => logout()}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
      {state === "home" ? <Screen1 /> : null}
    </div>
  );
}

// exporting the Nav function
export default Nav;
