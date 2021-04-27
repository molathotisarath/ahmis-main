import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Welcome from "./Welcome";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit", marginTop: "155px" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function Sidebar1() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/home" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/welcome" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/welcome" component={Welcome}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Sidebar1;
