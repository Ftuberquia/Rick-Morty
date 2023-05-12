import React from "react";
import SearchBar from "../Sarch/SearchBar";
import style from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
    const { onSearch, setAccess } = props;
  
    const { pathname }  = useLocation()
  
    const handleLogOut = () => {
      setAccess(false);
    };
    
        return(
            <div className={style.container}>
                {
                    pathname.includes("/home") &&
                        <SearchBar onSearch={onSearch}/>
                }
                {/* <SearchBar onSearch={this.props.onSearch}/> */}
                <Link to="/home">
                <button className={style.btn}> Home </button>   
                </Link>
                <Link to="/favorites">
                <button className={style.btn}>Favorites</button>   
                </Link>
                <Link to="/about">
                <button onClick={handleLogOut}className={style.btnright}> About </button>   
                </Link>
            </div>
        );
    
}

export default Nav;