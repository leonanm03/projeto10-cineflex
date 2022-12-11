import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Container, Title } from "../styles/Container"
import Footer from "./Footer"

export default function Sessions() {

    const [sessionslist, setSessionslist] = useState(null)


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes")
        promise.then((res) => {
            setSessionslist(res.data)
            console.log(res.data)
        })
        promise.catch((err) => alert(err.response.data.message))
    }

        , [])

    if (!sessionslist) {
        return (
            <Container> Carregando...</Container>
        )
    }

    return (
        <Container>
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

            <Footer
                posterURL={sessionslist.posterURL}
                title={sessionslist.title}
            ></Footer>

        </Container>


    )

}

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