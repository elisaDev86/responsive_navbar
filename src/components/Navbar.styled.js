import styled from "styled-components";

{/*container style*/}
export const NavbarContainer = styled.div`
width: 100%;
height: 88px;
position:sticky ;
top: 0 ;
z-index: 99 ;
background-color: #A9907E ;
`;

{/*wrap style*/}
export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1388px;
height: 100%;
align-items: center;
display: flex;
align-items: center;
flex-wrap: center;
justify-content:space-between;
`;

{/*logo style*/}
export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:flex-start;
align-items: center;
font-size: 1.8rem;
color: #F3DEBA;
`;

{/*menu style*/}
export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items:center;

 @media screen and (max-width: 968px){
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px ;
    left: ${({click})=> click ? 0 : "-100%"} ;
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color:#ABC4AA;
}
`;

{/*item style*/}
export const MenuItem = styled.li`
height:100%;
display:flex;
padding: 0.5rem 1.5rem ;
justify-self: center;
align-items:center;
font-weight:400;

& :hover{
    background-color:#ABC4AA;
    transition:0.4s ease-in;
}

@media screen and (max-width: 9680px ) {
    width:100%;
    height:78px;
}
`;
{/*icon link style*/}
export const MenuItemLink = styled.a`
text-decoration:none;
color:#F3DEBA;
`;

{/*logo mobile style*/}
export const IconLogoMobile = styled.div`
display: none;
 @media screen and (max-width: 968px) {
    display: flex;
    color: #F3DEBA;
    font-size: 2rem;
 }
`;



