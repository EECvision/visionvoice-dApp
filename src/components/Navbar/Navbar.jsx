import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>visionvoice-dApp</div>
      <div className={classes.search}>search bar</div>
      <div className={classes.reload}>Auto reload</div>
    </div>
  );
};

export default Navbar;
