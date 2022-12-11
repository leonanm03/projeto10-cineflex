
import styled from "styled-components";
import { Container } from "../styles/Container";

export default function Success() {

    const seats = [1, 2, 3, 4]

    return (
        <Container>
            <TitleSucess>
                <h1>Pedido feito com sucesso!</h1>
            </TitleSucess>
            <TextDiv data-test="movie-info">
                <h3>Filme e sessão</h3>
                <p>Titulo</p>
                <p>data</p>
            </TextDiv>
            <TextDiv data-test="seats-info">
                <h3>Ingressos</h3>
                {seats.map((seat) => (
                    <p key={seat}>Assento {seat}</p>
                ))}
            </TextDiv>
            <TextDiv data-test="client-info">
                <h3>Comprador</h3>
                <p>Nome: Zezinho</p>
                <p>CPF: 999.999.999.44</p>
            </TextDiv>
            <Button>
                <button >Voltar para Home</button>
            </Button>
        </Container>
    );
}

const TitleSucess = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    color: #247a6b;
    width: 150px;
    text-align: center;
    font-size: 24px;
  }
`

const TextDiv = styled.div`
width: 100%;
margin-left: 30px;
margin-bottom: 20px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 5px;
  }
`

const Button = styled.div`
  width: 100%;
  margin-top: 40px;
  text-align: center;
  button{
  background: #e8833a;
  border-radius: 3px;
  color: white;
  padding: 10px 20px;
  border: none;
  &:hover{
        cursor: pointer;
        background-color: #f4a261; 
        }
}
`
