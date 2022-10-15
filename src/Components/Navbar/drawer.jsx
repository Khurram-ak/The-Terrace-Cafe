import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      // backgroundColor: "#101010",
    },
    list: {
      width: "40vw",
      height: "100%",
      backgroundColor: "#070B20",
      [theme.breakpoints.down("xs")]: {
        width: "50vw",
      },
    },
    drawer_link: {
      textDecoration: "none",
      color: "white",
    },
    fullList: {
      width: "auto",
      border: "1px",
    },
    button: {
      display: "none",
      [theme.breakpoints.down(800)]: {
        display: "inline-block",
      },
    },
  })
);

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List key={100}>
        <ListItem key={200}>
          <ListItemIcon key={300}>
            <CloseIcon
            key={400}
              onClick={toggleDrawer(anchor, false)}
              style={{ cursor: "pointer", color: "white" }}
            />
          </ListItemIcon>
        </ListItem>
        {["Home", "Menu", "Reservation", "Gallery","About" ,"Contact"].map(
          (text, index) => (
            <a href={`#${text}`} key={74} className={classes.drawer_link}>
              <ListItem button onClick={()=>{navigateTo(index)}}  key={index+5}>
                <ListItemText  key={index+15} primary={text} />
              </ListItem>
            </a>
          )
        )}
      </List>
    </div>
  );


var navigate=useNavigate()

  const navigateTo=(index)=>{
    console.log(index)
    switch (index) {
      case 0:
        navigate("/")
        break;
     
      case 1:
        navigate("/menu")
        break;
     
      case 2:
        navigate("/reservation")
        break;
     
      case 3:
        navigate("/gallery")
        break;
     
      case 4:
        navigate("/about")
        break;
     
    }
  }



  return (
    <div>
      {["left"].map((anchor,index) => (
        <React.Fragment key={anchor}>
          <Button
          key={index}
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "white" }}
            className={classes.button}
          >
            <MenuIcon key={index+1} />
          </Button>
          <Drawer
          key={index+2}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={classes.drawer}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
