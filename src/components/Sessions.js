import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "./Footer"

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
            <SessionsUl> Carregando...</SessionsUl>
        )
    }

    return (
        <SessionsContainer>
            <Title>Selecione o horário</Title>
            <SessionsUl>
                {sessionslist.days.map((s) => (
                    <Session key={s.id}>
                        <h1>
                            {s.weekday} - {s.date}
                        </h1>
                        {s.showtimes.map((time) => (
                            // <link key={time.id} to={`/assentos/${time.id}`}>
                            <button key={time.id}>{time.name}</button>
                            // </link>
                        ))}
                    </Session>
                ))}

            </SessionsUl>

            <Footer sessionslist={sessionslist} />


        </SessionsContainer>


    )

}

const SessionsContainer = styled.div`
    margin-top: 67px;
    margin-left: calc(50% - 188px);
    width: 376px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-color: #C3CFD9;
    border-right: 2px;
    padding-bottom: 117px;    
`;

const Title = styled.h1`
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
`


const SessionsUl = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-color: #C3CFD9;
    border-right: 2px;
    
    `

const Session = styled.li`
    width: 100%; 
    padding-left: 23px;
    margin-bottom: 20px;
    h1 {
        height: 30px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
    }
    button {
        width: 82px;
        height: 43px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        margin-right: 8px;
        background-color: #e8833a;
        color: #fff;
        border: none;
        border-radius: 3px;

        &:hover{
        cursor: pointer;
        background-color: #f4a261; 
        }
    }
  
`;