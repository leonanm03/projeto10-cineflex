import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Route() {


    // useEffect(() => {
    //     const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
    //     promise.then((res) => setMovieslist(res.data))
    //     promise.catch((err) => alert(err.response.data.message))
    // }

    //     , [])

    // if (!movieslist) {
    //     return (
    //         <SessionDiv> Carregando...</SessionDiv>
    //     )
    // }

    return (
        <SessionDiv>
            <h1>Selecione o horário</h1>

        </SessionDiv>
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
        color: #293845;
    }
    
`