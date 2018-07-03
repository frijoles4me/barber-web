import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./CSS/divider.css";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <List component="nav" className="Logo">
          <Divider />
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Gallery" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListDividers);
