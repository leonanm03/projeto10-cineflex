import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../styles/Container";
import Footer from "./Footer";
import Seat from "./Seat";

export default function Seats() {
    const id = 1;
    const [session, setSession] = useState({});
    const [name, setName] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [movie, setMovie] = useState({ posterURL: "", title: "", date: "" });
    const [day, setDay] = useState({date:"", weekday:""})

    useEffect(
        () => {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`)
            promise.then(r => {
                setSession(r.data)
                setMovie(r.data.movie)
                setDay(r.data.day)

            })
            promise.catch((err) => alert(err.response.data.message))
        }
        , [])



    return (
        <>
            <Container>
                <Title>
                    Selecione o(s) assento(s)
                </Title>
                <ContainerSeats>
                    {session.seats?.map((seat, i) => {
                        return (
                            <Seat
                                key={seat.id}
                                seat={seat}
                            />
                        );
                    })}
                </ContainerSeats>
                <Descriptions>
                    <Description>
                        <div className="selected"></div>
                        <p>Selecionado</p>
                    </Description>
                    <Description>
                        <div></div>
                        <p>Disponível</p>
                    </Description>
                    <Description>
                        <div className="unavailable"></div>
                        <p>Indisponível</p>
                    </Description>
                </Descriptions>
                <form >
                    <Inputs>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input
                            type="text"
                            name="name"
                            value=""
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome..."
                            required
                        />
                    </Inputs>

                    <Inputs>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input
                            type="text"
                            id="cpf"
                            value=""
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="Digite seu CPF..."
                            required
                        />
                    </Inputs>

                    <Button><button type="submit" >Reservar assento(s)</button></Button>
                </form>
            </Container>
            <Footer posterURL={movie.posterURL} title={movie.title} > <h1>{`${day.weekday} - ${day.date}`}</h1>  </Footer>
        </>
    );
}


const ContainerSeats = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Descriptions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 30px;

`

const Description = styled.div`
    text-align: center;
    > div {
        background-color: #c3cfd9;
        border: 1px solid #808f9d;
        border-radius: 12px;
        margin: auto;
        box-sizing: border-box;
        height: 25px;
        width: 25px;
        padding: 0;
        font-size: 11px;
        &.unavailable {
        background-color: #fbe192;
        border-color: #f7c52b;
        }
        &.selected {
        background-color: #1aae9e;
        border-color: #0e7d71;
        }
    }
    > p {
        font-size: 13px;
        font-weight: 400;
    }
`

const Inputs = styled.div`
    margin-bottom: 10px;
    text-align: left;
    > input {
        width: 100%;
        height: 50px;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 15px;
        ::placeholder {
        color: #afafaf;
        font-style: italic;
        }
    }
    `

const Button = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
        button {background: #e8833a;
        border-radius: 3px;
        color: white;
        padding: 10px 20px;
        border: none;
        margin-left: calc(50% - 188px);
        &:hover{
            cursor: pointer;
            background-color: #f4a261; 
            }
        }
`