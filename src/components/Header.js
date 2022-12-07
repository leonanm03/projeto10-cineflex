import styled from "styled-components"


export default function Header() {

    return (
        <HeaderDiv><h1>CINEFLEX</h1></HeaderDiv>
    )
}

const HeaderDiv = styled.div`
position: fixed;
top: 0;
left: calc(50% - 188px);
background-color: #C3CFD9;
width: 376px;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
    h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
}
`