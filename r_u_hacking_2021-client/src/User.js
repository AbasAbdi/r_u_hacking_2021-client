// User.js
// Importing the necessary files
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CR from "./CR";
import { useAuth0 } from "@auth0/auth0-react";

// TabPanel function that takes props as arguments
function TabPanel(props) {
  // Declaring the props for this function
  const { children, value, index, ...other } = props;

  // Returns a div tabpanel that displays a box containing the children prop
  // wrapped in the Typography component we imported... if the value prop matches the index prop
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel2 function that takes props as arguments
function TabPanel2(props) {
  // Declaring the props for this function
  const { children, value, index, ...other } = props;

  // Returns a div tabpanel that displays a box containing the children prop
  // wrapped in the Typography component we imported... if the value prop matches the index prop
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Validation.
TabPanel2.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// Function that takes index as argument and returns id
function a11yProps2(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Validation.
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// Declaring the useStyles react hook.
// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  width: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

// User function that takes props as arguments
function User(props) {
  // Declaring the props for this function
  const { User_id, fName1, lName1 } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Using useTheme inside the function component to create theme object
  const theme = useTheme();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (value2) and call (setValue2)
  const [value2, setValue2] = React.useState(0);

  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }
  var savePersonal = once(function () {
    const value = {
      fName: fName,
      lName: lName,
      email: email,
      phone_number: phone_number,
      password: password,
    };

    axios
      .put(`http://localhost:8080/savePersonal/${User_id}`, value)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  });

  var saveAddress = once(function () {
    const value1 = {
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      country: country,
    };

    axios
      .put(`http://localhost:8080/saveAddress/${User_id}`, value1)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  });

  var saveBank = once(function () {
    const value2 = {
      card_name: card_name,
      card_amount: card_amount,
      card_num: card_num,
      expir_month: expir_month,
      expir_year: expir_year,
      card_cvs: card_cvs,
    };

    axios
      .put(`http://localhost:8080/saveBank/${User_id}`, value2)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  });

  // Declaring a state variable (fName) and call (setFname)
  const [fName, setFname] = React.useState("");
  // Declaring a state variable (lName) and call (setLname)
  const [lName, setLname] = React.useState("");
  // Declaring a state variable (email) and call (setEmail)
  const [email, setEmail] = React.useState("");
  // Declaring a state variable (phone_number) and call (setPhone_number)
  const [phone_number, setPhone_number] = React.useState("");
  // Declaring a state variable (password) and call (setPassword)
  const [password, setPassword] = React.useState("");
  // Declaring a state variable (cPassword) and call (setCpassword)
  const [cPassword, setCpassword] = React.useState("");

  // Declaring a state variable (address1) and call (setAddress1)
  const [address1, setAddress1] = React.useState("");
  // Declaring a state variable (address2) and call (setAddress2)
  const [address2, setAddress2] = React.useState("");
  // Declaring a state variable (city) and call (setCity)
  const [city, setCity] = React.useState("");
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState("");
  // Declaring a state variable (zip) and call (setZip)
  const [zip, setZip] = React.useState("");
  // Declaring a state variable (country) and call (setCountry)
  const [country, setCountry] = React.useState("");

  // Declaring a state variable (activeStep) and call (setActiveStep)
  const [activeStep, setActiveStep] = React.useState(0);
  // Declaring a state variable (card_name) and call (setCard_name)
  const [card_name, setCard_name] = React.useState("");
  // Declaring a state variable (card_amount) and call (setCard_amount)
  const [card_amount, setCard_amount] = React.useState("");
  // Declaring a state variable (card_num) and call (setCard_num)
  const [card_num, setCard_num] = React.useState("");
  // Declaring a state variable (expir_month) and call (setExpir_month)
  const [expir_month, setExpir_month] = React.useState("");
  // Declaring a state variable expir_year) and call (setExpir_year)
  const [expir_year, setExpir_year] = React.useState("");
  // Declaring a state variable (card_cvs) and call (setCard_cvs)
  const [card_cvs, setCard_cvs] = React.useState("");
  const { user, isAuthenticated } = useAuth0();

  /* Declaring a variable (handleChangeIndex) and assigning it an arrow functiin such that
     when it's called it utilises the setValue2 call to set the value2 state variable to the new value (index) */
  const handleChangeIndex = (index) => {
    return setValue2(index);
  };

  /* Declaring a variable (switchTab) and assigning it an arrow functiin such that
     when it's called it utilises the setValue2 call to set the value2 state variable to the new value (newValue) */
  const switchTab = (event, newValue) => {
    return setValue2(newValue);
  };
  if (activeStep === 1 && fName === "") {
    alert("Please input your first name.");
    setActiveStep(0);
  } else if (activeStep === 1 && lName === "") {
    alert("Please input your last name.");
    setActiveStep(0);
  } else if (activeStep === 1 && email === "") {
    alert("Please input your email.");
    setActiveStep(0);
  } else if (activeStep === 1 && !email.includes("@")) {
    alert("You did not input a valid email.");
    setEmail("");
    setActiveStep(0);
  } else if (activeStep === 1 && password === "") {
    alert("Please input your password.");
    setActiveStep(0);
  } else if (activeStep === 1 && password !== cPassword) {
    alert("Your password and your confirm password do not match.");
    setPassword("");
    setCpassword("");
    setActiveStep(0);
  } else if (activeStep === 1) {
    savePersonal();
    setActiveStep(0);
  }

  if (activeStep === 2 && address1 === "") {
    alert("Please input your address in line 1.");
    setActiveStep(0);
  } else if (activeStep === 2 && city === "") {
    alert("Please input the name of your city.");
    setActiveStep(0);
  } else if (
    activeStep === 2 &&
    state === "Please select a region, state or province."
  ) {
    setState("");
    setActiveStep(0);
  } else if (activeStep === 2 && zip === "") {
    alert("Please input your Zip/Postal code.");
    setActiveStep(0);
  } else if (activeStep === 2 && country === "") {
    alert("Please input the name of your country of residence.");
    setActiveStep(0);
  } else if (activeStep === 2) {
    saveAddress();
    setActiveStep(0);
  }

  if (activeStep === 3 && card_num === "") {
    alert("Please input your card number");
    setActiveStep(0);
  } else if (activeStep === 3 && expir_month === "") {
    alert("Please input your card expiration Month.");
    setActiveStep(0);
  } else if (activeStep === 3 && expir_year === "") {
    alert("Please input your card expiration Year.");
    setActiveStep(0);
  } else if (activeStep === 3 && card_cvs === "") {
    alert("Please input your card CVS.");
    setActiveStep(0);
  } else if (activeStep === 3) {
    saveBank();
    setActiveStep(0);
  }

  //{fName === "" ? fName1 + " " + lName1 : fName + " " + lName}
  /*             {user.given_name === ""
  ? user.given_name + " " + user.family_name
  : user.given_name + " " + user.family_name}*/
  // Return for the User function
  /* It renders material ui's Typography component containing the title that will be displayed to the user which will be the user's first and last name 
   who's values have been received as props from the SignIn component. It will then display two horizontal Tabs with the labels "My Modules" & "My Marks". 
   By default it will display the "My Modules" Tab in which the Modules component is rendered and it's "id" prop is given the value of the "course_id" prop 
   who's value was given from the SignIn component. If the "My Marks" Tab is clicked it fills out the information to be displayed to the user by  mapping 
   through the information contained within the databases "assessment" table (which is in the assess state variable) and returning the relevant information 
   for each section or returning null. Finally, the CR component is rendered to act as the footer for this section.*/
  return (
    isAuthenticated && (
      <main>
        <div className={classes.heroContent}>
          <div className={classes.heroContent}>
            <Grid item md={12}>
              <Typography
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                <br />
                <img src={user.picture} />
                <br />
                {user.given_name === ""
                  ? user.given_name + " " + user.family_name
                  : user.given_name + " " + user.family_name}
                <br />
                {"@" + user.nickname}
              </Typography>

              <div className={classes.root2}>
                <Tabs
                  value={value2}
                  onChange={switchTab}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab
                    label="Update My Personal Information"
                    {...a11yProps2(0)}
                  />
                  <Tab
                    label="Update My Shipping Information"
                    {...a11yProps2(1)}
                  />
                  <Tab label="Update My Banking Details" {...a11yProps2(2)} />
                </Tabs>

                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value2}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel2 value={value2} index={0} dir={theme.direction}>
                    <main className={classes.layout}>
                      <Paper className={classes.paper}>
                        <Typography component="h6" variant="h5" align="center">
                          Update My Personal Information
                        </Typography>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="firstName"
                              name="firstName"
                              label="First name"
                              value={fName}
                              onChange={(e) => setFname(e.target.value)}
                              fullWidth
                              autoComplete="given-name"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="lastName"
                              name="lastName"
                              label="Last name"
                              value={lName}
                              onChange={(e) => setLname(e.target.value)}
                              fullWidth
                              autoComplete="family-name"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="email"
                              name="email"
                              label="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="phone_number"
                              name="phone_number"
                              label="Phone/Mobile number"
                              value={phone_number}
                              onChange={(e) => setPhone_number(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="password"
                              name="password"
                              label="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="confirm-password"
                              name="confirm-password"
                              label="Confrim Password"
                              value={cPassword}
                              onChange={(e) => setCpassword(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                        </Grid>

                        <React.Fragment>
                          <div className={classes.buttons}>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={(e) => setActiveStep(1)}
                              className={classes.button}
                            >
                              Submit
                            </Button>
                          </div>
                        </React.Fragment>
                      </Paper>
                      <div></div>
                    </main>
                  </TabPanel2>

                  <TabPanel2 value={value2} index={1} dir={theme.direction}>
                    <main className={classes.layout}>
                      <Paper className={classes.paper}>
                        <Typography component="h6" variant="h5" align="center">
                          Update My Shipping Information
                        </Typography>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="address1"
                              name="address1"
                              label="Address line 1"
                              value={address1}
                              onChange={(e) => setAddress1(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              id="address2"
                              name="address2"
                              label="Address line 2"
                              value={address2}
                              onChange={(e) => setAddress2(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="city"
                              name="city"
                              label="City"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="state"
                              name="state"
                              label="State/Province/Region"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="zip"
                              name="zip"
                              label="Zip / Postal code"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id="country"
                              name="country"
                              label="Country"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                        </Grid>

                        <React.Fragment>
                          <div className={classes.buttons}>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={(e) => setActiveStep(2)}
                              className={classes.button}
                            >
                              Submit
                            </Button>
                          </div>
                        </React.Fragment>
                      </Paper>
                      <div></div>
                    </main>
                  </TabPanel2>
                  <TabPanel2 value={value2} index={2} dir={theme.direction}>
                    <React.Fragment>
                      <main className={classes.layout}>
                        <Paper className={classes.paper}>
                          <Typography
                            component="h6"
                            variant="h5"
                            align="center"
                          >
                            Update My Banking Details
                          </Typography>
                          <br />
                          <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                id="card_name"
                                name="card_name"
                                label="Cardholder name"
                                value={card_name}
                                placeholder="Cardholder name"
                                onChange={(e) => setCard_name(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                id="card_amount"
                                name="card_amount"
                                label="Balance on the card"
                                value={card_amount}
                                placeholder="£ "
                                onChange={(e) => setCard_amount(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                id="card_num"
                                name="card_num"
                                label="Card number"
                                value={card_num}
                                placeholder="Card number"
                                onChange={(e) => setCard_num(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                id="expir_month"
                                name="expir_month"
                                label="Expiration Month"
                                value={expir_month}
                                placeholder="Expiration Month"
                                onChange={(e) => setExpir_month(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                id="expir_year"
                                name="expir_year"
                                label="Expiration Year"
                                value={expir_year}
                                placeholder="Expiration Year"
                                onChange={(e) => setExpir_year(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                id="card_cvs"
                                name="card_cvs"
                                label="CVS"
                                value={card_cvs}
                                placeholder="CVS"
                                onChange={(e) => setCard_cvs(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                          <React.Fragment>
                            <div className={classes.buttons}>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={(e) => setActiveStep(3)}
                                className={classes.button}
                              >
                                Submit
                              </Button>
                            </div>
                          </React.Fragment>
                        </Paper>
                      </main>
                      <div></div>
                    </React.Fragment>
                  </TabPanel2>
                </SwipeableViews>
                <br />
              </div>
            </Grid>
          </div>
        </div>
        <CR />
      </main>
    )
  );
}

// exporting the User function
export default User;
