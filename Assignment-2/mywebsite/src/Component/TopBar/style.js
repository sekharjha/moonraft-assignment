import styled from 'styled-components'


export const TopNavBar = styled.div`
        display:flex;
        flex-direction:row;
        background: #f5f5f5;
        color: #888;
        padding: 0;
        height:50px;
`

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
`
export const Row  = styled.div`
    display: flex;
    flex-direction:row;
`
export const TopBarMenu = styled.div`
    height:100px;
    font-family: "Lato", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: none;
`
export const ListMenu = styled.li`
    font-size: 13px;
    display: inline-block;
    margin: 0 20px 0 0;
    letter-spacing: 0 !important;
`
export const SubListMenu = styled.li`
    opacity: 0;
    position: absolute;
    margin: 20px 0 0 0;
    z-index: 1001;
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
    transform: translate3d(0,15px,0);
`
export const SocialIconsLists = styled.ul`
    width:300px;
    height:40px;
    padding-left: 5px;
    height:100px;
`
export const SocialIconsList = styled.li`
    width:40px;
    height:40px;
    display: inline;
	float: left;
	text-align: left;
	margin-right: 16px;
	margin-top: 11px;
	transform:scale(1.2);
`