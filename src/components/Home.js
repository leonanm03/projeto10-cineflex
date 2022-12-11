import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Container, Title } from "../styles/Container"

export default function Home() {
    const [movieslist, setMovieslist] = useState(null)

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then((res) => setMovieslist(res.data))
        promise.catch((err) => alert(err.response.data.message))
    }

        , [])

    if (!movieslist) {
        return (
            <Container> Carregando...</Container>
        )
    }

    return (
        <Container>
            <Title>Selecione o filme</Title>

            <MoviesUl>
                {movieslist.map((m) => (
                    <li key={m.id}>  <Link to={`/sessoes/${m.id}`}><img src={m.posterURL} alt="posterURL"></img></Link></li>
                ))}
            </MoviesUl>
        </Container>
    )

}

const MoviesUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 27px;
        li{
            display:flex;
            justify-content: center;
            align-items: center;
            width: 145px;
            height: 209px;
            background: #FFFFFF;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius: 3px;

            img{
                width: 129px;
                height: 193px;
            }
        }
    `