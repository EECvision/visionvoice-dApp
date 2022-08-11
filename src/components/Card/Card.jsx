import classes from "./Card.module.css";

const Card = ({ userName, address, index }) => {
  return (
    <div className={classes.container}>
      <div className={classes.index}>{index}</div>
      <div className={classes.wrapper}>
        <div className={classes.userName}>{"Lorem Ipsum Dolometa"}</div>
        <div className={classes.address}>
          {"0x4eb9B0dBD3f5e71d8663FE4F833FaBC2C6f322Cb"}
        </div>
      </div>
    </div>
  );
};

export default Card;
