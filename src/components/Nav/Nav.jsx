import React from "react";
import SearchBar from "../Sarch/SearchBar";
import { Link } from "react-router-dom";

class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    
    render (){
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/about">
                 <h3>ABOUT</h3>   
                    </Link>
                <Link to="/home">
                     <h3>HOME</h3>   
                </Link>
                <Link to="/favorites">
                     <h3>FAVORITES</h3>   
                </Link>
            </div>
        );
    }
}

export default Nav;