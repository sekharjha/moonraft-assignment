import React, { Component } from 'react';
import {menuItems} from './MenuItems';
import {Styledlist,Styledul,Styledlink,StyledLogo,StyledNav} from './style'
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <StyledNav>
                <StyledLogo>SPHENE</StyledLogo>
               <div className = "menuIcon"></div>
               <Styledul>
                    {menuItems.map((item,index)=>{
                        return(
                            <Styledlist key={index}>
                                <Link to={item.url} className={item.cName}>
                                    {item.title}
                                </Link>
                            </Styledlist>
                        )
                    })}
                   
               </Styledul>
            </StyledNav>
        );
    }
}
export default Navbar;