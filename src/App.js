import "./App.css";
import MainContent from "./MainContent";
import TopHeader from "./TopHeader";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, Paper } from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Sidebar1 from "./Sidebar1";
import Sidebar2 from "./Sidebar2";
import { useTranslation } from "react-i18next";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  const [basha, setBasha] = useState("en");
  // const lang = "en";
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  function changeMode() {
    setDarkMode(darkMode ? false : true);
  }
  function changeLanguage(basha) {
    console.log("li8 = " + basha);
    if (basha === "en") {
      setBasha("hi");
    } else {
      setBasha("en");
    }
    i18n.changeLanguage(basha === "en" ? "hi" : "en");
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Paper>
          <TopHeader
            basha={basha}
            darkMode={darkMode}
            handleChange={changeMode}
            handleLanguage={changeLanguage}
          />
          <Switch>
            <Route path="/welcome" component={Welcome}></Route>
            <Route path="/sidebar1" component={Sidebar1}></Route>
            <Route path="/sidebar2" component={Sidebar2}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/" component={MainContent}></Route>
          </Switch>

          <div className="App">
            {/* <TopHeader darkMode={darkMode} handleChange={changeMode} /> */}
            {/* <MainContent /> */}
          </div>
        </Paper>
        <CssBaseline></CssBaseline>
      </Router>
    </ThemeProvider>
  );
}

export default App;
