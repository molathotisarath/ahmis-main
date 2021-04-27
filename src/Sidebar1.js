import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Welcome from "./Welcome";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { position: "relative", height: "782px" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  listItemsStyle: {
    margin: "-12px 0px",
    width: "220px",
  },
}));
const Accordion = withStyles({
  root: {
    border: "1px solid white",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid white",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "5px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    // padding: "-10px 0px",
  },
}))(MuiAccordionDetails);

function Sidebar1() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel");
  const [homeContent, setHomeContent] = React.useState(true);
  const [home2Content, setHome2Content] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleEdit = (num) => {
    // e.preventDefault();
    let buttonIndex = num;
    console.log("buttonIndex = " + buttonIndex);
    if (buttonIndex === "1") {
      setHomeContent(true);
      setHome2Content(false);
    } else {
      setHomeContent(false);
      setHome2Content(true);
    }
  };
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "240px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List style={{ marginTop: "-8px" }}>
            <ListItem button id="1" onClick={(e) => handleEdit("1")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>

            <Accordion
              square
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Doctor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <Link to="/home" className={classes.link}>
                    <ListItem
                      button
                      id="2"
                      className={classes.listItemsStyle}
                      onClick={(e) => handleEdit("2")}
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                    </ListItem>
                  </Link>
                  <br></br>
                  <Link to="/welcome" className={classes.link}>
                    <ListItem
                      button
                      id="3"
                      className={classes.listItemsStyle}
                      onClick={(e) => handleEdit("3")}
                    >
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={"About"} />
                    </ListItem>
                  </Link>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              square
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Nurse</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <Link to="/home" className={classes.link}>
                    <ListItem
                      button
                      id="4"
                      className={classes.listItemsStyle}
                      onClick={(e) => handleEdit("4")}
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                    </ListItem>
                  </Link>
                  <br></br>
                  <Link to="/welcome" className={classes.link}>
                    <ListItem
                      button
                      id="5"
                      className={classes.listItemsStyle}
                      onClick={(e) => handleEdit("5")}
                    >
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={"About"} />
                    </ListItem>
                  </Link>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Receptionist
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <Link to="/home" className={classes.link}>
                    <ListItem
                      button
                      id="6"
                      className={classes.listItemsStyle}
                      onClick={(e) => handleEdit("6")}
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                    </ListItem>
                  </Link>
                  <br></br>
                  <Link to="/welcome" className={classes.link}>
                    <ListItem
                      button
                      id="7"
                      className={classes.listItemsStyle}
                      onClick={(e) => handleEdit("7")}
                    >
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={"About"} />
                    </ListItem>
                  </Link>
                </List>
              </AccordionDetails>
            </Accordion>
          </List>
        </Drawer>
        {/* <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Typography>
            </Container>
          </Route>
        </Switch> */}

        {home2Content && (
          <Switch>
            <Route exact path="/welcome" component={Welcome}></Route>
            <Route exact path="/home" component={Home}></Route>
          </Switch>
        )}

        {homeContent && (
          <Container>
            <h1>Home Content</h1>
          </Container>
        )}
      </div>
    </Router>
  );
}

export default Sidebar1;
