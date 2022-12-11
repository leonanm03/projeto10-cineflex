import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Title } from "../styles/Container";
import Footer from "./Footer";
import Seat from "./Seat";

export default function Seats({ setDemand }) {
    const [session, setSession] = useState({});
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [movie, setMovie] = useState({ posterURL: "", title: "", date: "" });
    const [day, setDay] = useState({ date: "", weekday: "" })
    const [seatsSelected, setSeatsSelected] = useState([])
    const [seatsNumbers, setSeatsNumbers] = useState([])

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(
        () => {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`)
            promise.then(r => {
                console.log(r.data)
                setSession(r.data)
                setMovie(r.data.movie)
                setDay(r.data.day)
            })
            promise.catch((err) => alert(err.response.data.message))
        }
        , [id])


    function handleSubmit(e) {
        e.preventDefault();

        if (!seatsSelected.length) {
            alert("você precisa selecionar pelo menos 1 assento")
        }
        else {
            const request = {
                ids: seatsSelected,
                name: name,
                cof: cpf
            }

            const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", request)
            promise.then(() => {
                setDemand(
                    {
                        title: movie.title,
                        date: `${day.date} ${session.name}`,
                        name: name,
                        cpf: cpf,
                        seats: seatsNumbers
                    }
                )
                navigate("/sucesso");
            })
            promise.catch(err => alert(err.response.message))
        }
    };



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
                                seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected}
                                seatsNumbers={seatsNumbers} setSeatsNumbers={setSeatsNumbers}
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
                <form onSubmit={handleSubmit}>
                    <Inputs>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome..."
                            required
                            data-test="client-name"
                        />
                    </Inputs>

                    <Inputs>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="Digite seu CPF..."
                            required
                            data-test="client-cpf"
                        />
                    </Inputs>

                    <Button><button data-test="book-seat-btn" type="submit" >Reservar assento(s)</button></Button>
                </form>
            </Container>
            <Footer posterURL={movie.posterURL} >
                <h1>{`${movie.title}`}</h1>
                <h1>{`${day.weekday} - ${session.name}`}</h1>
            </Footer>
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