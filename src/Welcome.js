import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div container>
      <Button
        component={Link}
        to="/sidebar1"
        variant="contained"
        color="primary"
      >
        Permanent Sidebar
      </Button>

      <Button
        component={Link}
        to="/sidebar2"
        variant="contained"
        color="primary"
      >
        Permanent Sidebar2
      </Button>
    </div>
  );
}

export default Welcome;
