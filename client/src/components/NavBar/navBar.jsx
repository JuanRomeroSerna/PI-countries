import { Link } from "react-router-dom";
import style from "./navBar.module.css";
const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">HOME</Link>
      <Link to="/activities">ACTIVITIES</Link>
    </div>
  );
};

export default NavBar;
