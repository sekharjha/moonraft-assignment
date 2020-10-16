import React from 'react'
import styled from 'styled-components'
export const Styledlist = styled.li`
    list-style-type: none;
    text-decoration:none;
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "black"};
    background: white;
    border: none;
    border-radius: 3px;
`;

export const Styledul = styled.ul`
   font-family:Lato, HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif;
   display:grid;
   font-size:14px;
   grid-template-columns:repeat(8,auto);
   grid-gap:6px;
   list-style-type:none;
   text-align:center;
   width:70vw;
   font-weight:600;
   color: rgb(102, 102, 102);
   justify-content:end;
   margin-right:2rem;
`;

export const  Styledlink = styled.a`
    color: black;
    text-decoration:none;
    padding: 0.5rem 1 rem;
`;
export const StyledNav = styled.nav`

    background-color:#fff;
    display:flex;
    height:80px;
    align-items:center;
    font-size:1.2em;
    justify-content:center;
`;

export const StyledLogo = styled.h1`
    font-family:Lato, HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.5em;
    justify-self:start;
    margin-left:20px;
    margin-right:100px;
    font-weight:600;
    line-height:42px;
    cursor: pointer;
    color: rgb(102, 102, 102);
`;
