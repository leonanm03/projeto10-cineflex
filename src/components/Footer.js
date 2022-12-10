import styled from "styled-components"



export default function Footer({sessionslist}) {


    return (
        <FooterDiv>
            <div><img src={sessionslist.posterURL} alt={sessionslist.title} /></div>
            <h1>{sessionslist.title}</h1>

        </FooterDiv>
    )
}

const FooterDiv = styled.div`
position: fixed;
bottom: 0;
left: calc(50% - 188px);
background-color: #DFE6ED;
width: 376px;
height: 117px;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #9EADBA;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-left:10px;
        img{
            width: 48px;
            height: 72px;
        }
    }
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 40px;
        margin-left: 14px;
    }   

`