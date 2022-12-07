import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Sessions() {

    const [sessionslist, setSessionslist] = useState(null)


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes")
        promise.then((res) => {
            console.log(res.data)
            setSessionslist(res.data)

        })
        promise.catch((err) => alert(err.response.data.message))
    }

        , [])

    if (!sessionslist) {
        return (
            <SessionDiv> Carregando...</SessionDiv>
        )
    }

    return (
        <>
            <SessionDiv>
                <h1>Selecione o horário</h1>

            </SessionDiv>

            <FooterDiv>
                <div><img src={sessionslist.posterURL} alt={sessionslist.title} /></div>
                <h1>{sessionslist.title}</h1>

            </FooterDiv>
        </>


    )

}

const SessionDiv = styled.div`
margin-top: 67px;
margin-left: calc(50% - 188px);
width: 376px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-color: #C3CFD9;
border-right: 2px;
    h1{
        height: 110px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
    }
    
`
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