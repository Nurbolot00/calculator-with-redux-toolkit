import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import classes from "./Header.module.css";

const Header = () => {
 const navigate = useNavigate()
 const logout = () =>{
  navigate("/")
 }
 const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  return (
    <>
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>{" "}
        </nav>
      )}
    </header>
    <Outlet/>
    </>
  );
};

export default Header;
