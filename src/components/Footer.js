import styled from "styled-components"



export default function Footer({ posterURL, children }) {

    return (
        <FooterDiv>
            <Img><img src={posterURL} alt={posterURL} /></Img>
            <TextContainer>
                {children}
            </TextContainer>

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
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #9EADBA;
`
const Img = styled.div`
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
`
const TextContainer = styled.div`
    height: 89px;
    margin-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px; 
    }

    
`