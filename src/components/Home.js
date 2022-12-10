import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

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
            <HomeDiv> Carregando...</HomeDiv>
        )
    }

    return (
        <HomeDiv>
            <h1>Selecione o filme</h1>

            <MoviesUl>
                {movieslist.map((m) => (
                    <li key={m.id}>  <img src={m.posterURL} alt="posterURL"></img></li>
                ))}
            </MoviesUl>
        </HomeDiv>
    )

}

const HomeDiv = styled.div`
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