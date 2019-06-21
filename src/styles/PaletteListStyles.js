import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global":{
    ".fade-exit":{
      opacity:"1"
    },
    ".fade-exit-active":{
      opacity:0,
      transition:"opacity 500ms ease-out"
    }
  },
  root: {
    backgroundColor: "#5109aa",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    overflow:"scroll",
    "& h1":{
      fontSize:"2rem"
    }
  },

  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexwrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "60%"
    }
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white"
    }
  },

  Palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};
