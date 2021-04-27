import React from "react";
import LeftLogo from "./logo-left.png";
import RightLogo from "./logo-right.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Switch } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Globals";
import "./App";
// import { Link } from "react-router-dom";

// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const leftImgStyle = {
  height: "80px",
  width: "200px",
  backgroundColor: "white",
};
const titleStyle = {
  margin: "10px 60px 0px 60px",
};
const subTitleStyle = {
  textAlign: "center",
};
const topStyle = {
  position: "relative",
  top: "0",
  left: "0",
  width: "100%",
};
function TopHeader(props) {
  const { t, i18n } = useTranslation();

  const basha = props.basha;

  //console.log("lang = " + lang + ", basha = " + basha);
  // const { t, i18n } = useTranslation();
  // function handleClick(lang) {
  //   i18n.changeLanguage(lang);
  // }
  //   const theme = createMuiTheme({
  //     palette: {
  //       type: "dark",
  //     },
  //   });
  return (
    // <ThemeProvider theme={theme}>
    //   <Paper>
    <div style={topStyle}>
      {/* <center>
        <img style={leftImgStyle} src={LeftLogo} alt="Left-Logo" />
        AYUSH HOSPITAL MANAGEMENT INFORMATION SYSTEM (A-HMIS)
        <img style={leftImgStyle} src={RightLogo} alt="Left-Logo" />
      </center> */}
      <Grid container justify="center">
        <Grid item></Grid>
        <Grid item>
          <img style={leftImgStyle} src={LeftLogo} alt="Left-Logo" />
        </Grid>
        <Grid item>
          <Typography style={titleStyle} variant="h5" gutterBottom>
            <b>{t("heading")}</b>
          </Typography>
          <Typography variant="h5" gutterBottom style={subTitleStyle}>
            <b>{t("subheading")}</b>
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          <img style={leftImgStyle} src={RightLogo} alt="Right-Logo" />
        </Grid>
        <Grid item></Grid>
      </Grid>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={2} xl={2}></Grid>
            <Grid item xs={2} xl={1}>
              {" "}
              <Button
                component={Link}
                to="/home"
                color="inherit"
                startIcon={<HomeIcon />}
              >
                {t("homeBtn")}
              </Button>
            </Grid>
            <Grid item xs={4} xl={5} />
            <Grid item xs={2} xl={1}>
              {" "}
              <Button
                color="inherit"
                onClick={() => props.handleLanguage(basha)}
              >
                {basha === "en" ? "हिंदी" : "English"}
                {/* Hindi */}
              </Button>
            </Grid>
            <Grid item xs={2} xl={1}>
              {" "}
              <Switch
                // checked={props.darkMode}
                onChange={props.handleChange}
                name="DarkMode"
              ></Switch>
            </Grid>
            <Grid item xs={1} xl={3}></Grid>
          </Grid>
          {/* <Typography variant="h6">News</Typography>
          <Typography variant="h6">News</Typography>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    //   </Paper>
    // </ThemeProvider>
  );
}

export default TopHeader;
