// Screen1.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CR from "./CR";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

// Screen1 function
function Screen1() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState("home");
  // Declaring a state variable (stud) and call (setStud)
  const [stud, setStud] = React.useState([]);
  const { user, isAuthenticated } = useAuth0();

  function fetchCustomerRecords() {
    axios
      .get("http://localhost:8080/customer")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setStud(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }
  // Return for the Screen1 function
  /* It renders material ui's Typography component containing the title and secondary information that will be displayed to the user. 
  Then it shows two cards containing information on Womenswear or Menswear that the user can browse through. 
  Each card contains a button that will either conditionally render the Womenswear or Menswear component depending on which courses the user is interested in. 
  Finally, the CR component is rendered to act as the footer for this section. */
  return (
    !isAuthenticated && (
      <main>
        <div className={classes.heroContent}>
          {fetchCustomerRecords()}
          <Container className={classes.cardGrid} maxWidth="md">
            <br />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Old School Audio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Join in the discussion, create topics, meet new people and have a
              wonderful time.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item xs={12} sm={6} md={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://www.goodtherapy.org/dbimages/ckupload_20190109164621_Aging-geriatric-A1.jpg"
                    />
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://img.aplaceformom.com/main/uploads/2014/01/cutting-edge-technology-for-seniors.jpg"
                    />
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <footer class="footer">
          <CR />
        </footer>
      </main>
    )
  );
}

// exporting the Screen1 function
export default Screen1;
