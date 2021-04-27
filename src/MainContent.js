import React from "react";
import Grid from "@material-ui/core/Grid";
import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputIcon from "@material-ui/icons/Input";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Slider from "infinite-react-carousel";
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@material-ui/core";

const contentStyle = {
  marginTop: "20px",
};
const useStyles = makeStyles({
  root: {
    height: "573px",
  },
  btnCard: {
    height: "573px",
  },
  btnStyle: {
    width: "350px",
    textAlign: "center",
    marginTop: "10px",
    height: "50px",
    padding: "5px 0px",
    //marginLeft: "45px",
  },
  servicesBtnStyle: {
    width: "350px",
    textAlign: "center",
    marginTop: "12px",
    height: "50px",
    //marginLeft: "45px",
    padding: "5px 0px",
  },
  servicesStyle: {
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
  titleStyle: {
    marginTop: "20px",
    textAlign: "center",
    marginBottom: "30px",
  },
  servicesTitleStyle: {
    marginTop: "30px",
    textAlign: "center",
    marginBottom: "0px",
  },
  contentCard: {
    margin: "10px 0px",
    backgroundColor: "SlateBlue",
    height: "250px",
  },
  aboutContentCard: {
    marginTop: "25px",
    backgroundColor: "Tomato",
  },
  contactContentCard: {
    height: "250px",
    margin: "10px 0px",
    backgroundColor: "SlateBlue",
  },
  inputStyle: {
    width: "300px",
    marginBottom: "15px",
    //marginLeft: "65px",
    textAlign: "center",
  },
  imgStyle: {
    height: "500px",
  },
  loginStyle: {
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
function MainContent() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const settings = {
    autoplay: true,
    dots: true,
  };
  return (
    <div style={contentStyle}>
      <Grid container spacing={2}>
        <Grid item xl={1} sm={0} xs={0}></Grid>
        <Grid item xl={7} sm={12} xs={12}>
          <Card className={classes.root}>
            <CardContent>
              <Slider {...settings}>
                {/* <Carousel enableAutoPlay autoPlaySpeed={1500}> */}
                <img className={classes.imgStyle} src={Image3} alt="image1" />
                <img className={classes.imgStyle} src={Image2} alt="image2" />
                <img className={classes.imgStyle} src={Image1} alt="image3" />
                {/* </Carousel> */}
              </Slider>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3} sm={12} xs={12}>
          <Card className={classes.btnCard}>
            <CardContent>
              <div className={classes.loginStyle}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.titleStyle}
                >
                  <b>{t("login")}</b>
                </Typography>
                <TextField
                  className={classes.inputStyle}
                  label="Username"
                  variant="outlined"
                />
                <br></br>
                <TextField
                  className={classes.inputStyle}
                  label="Password"
                  type="password"
                  variant="outlined"
                />
                <br></br>
                <Button
                  component={Link}
                  to="/welcome"
                  startIcon={<InputIcon />}
                  color="secondary"
                  variant="contained"
                  className={classes.btnStyle}
                >
                  {t("login")}
                </Button>
              </div>
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  marginTop: "20px",
                  borderColor: "#000000",
                }}
              />
              <div className={classes.servicesStyle}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.servicesTitleStyle}
                >
                  <b>{t("servicesHeading")}</b>
                </Typography>
                <br></br>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.servicesBtnStyle}
                >
                  {t("register")}
                </Button>
                <br></br>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.servicesBtnStyle}
                >
                  {t("getAyushId")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={1} sm={0} xs={0}></Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xl={1} sm={0}></Grid>
        <Grid item xl={10} sm={12}>
          <Card className={classes.aboutContentCard}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                className={classes.titleStyle}
              >
                <b>{t("aboutHeading")}</b>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.titleStyle}
              >
                {t("about")}
              </Typography>
            </CardContent>
          </Card>
          <Grid container spacing={2}>
            <Grid item xl={6}>
              <Card className={classes.contentCard}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    <b>{t("objectivesHeading")}</b>
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    {t("objectives")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={6}>
              <Card className={classes.contentCard}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    <b>{t("featuresHeading")}</b>
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    {t("features")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xl={6}>
              <Card className={classes.contentCard}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    <b>{t("benfitsHeading")}</b>
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    {t("benfits")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={6} lg={12}>
              <Card className={classes.contactContentCard}>
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    <b>{t("contactHeading")}</b>
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.titleStyle}
                  >
                    {t("contact")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={1} sm={0}></Grid>
      </Grid>
      <CssBaseline></CssBaseline>
    </div>
  );
}

export default MainContent;
