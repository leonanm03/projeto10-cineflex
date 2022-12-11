import { useState } from "react";
import styled from "styled-components";


export default function Seat(
  { seat, seatsSelected, setSeatsSelected,
    seatsNumbers, setSeatsNumbers }) {

  const { id, name, isAvailable } = { ...seat }
  const [selected, setSelected] = useState(false)

  function toggleSeat() {
    if (!selected) {
      setSeatsSelected([...seatsSelected, id])
      setSeatsNumbers([...seatsNumbers, name])
    }
    else {
      const position = seatsSelected.indexOf(id)
      const newSeats = [...seatsSelected]
      const newNumbers = [...seatsNumbers]
      newSeats.splice(position, 1)
      newNumbers.splice(position, 1)
      setSeatsSelected(newSeats)
      setSeatsNumbers(newNumbers)
    }

    setSelected(!selected)
  }


  if (!isAvailable) return (<ButtonUnavailable data-test="seat" onClick={() => alert("Esse assento não está disponíve")} >{name}</ButtonUnavailable>);
  else if (!selected) return (<Button data-test="seat" onClick={toggleSeat}>{name}</Button>);
  else return (<ButtonSelected data-test="seat" onClick={toggleSeat}>{name}</ButtonSelected>);
}




const Button = styled.button`
  background-color: #C3CFD9;
  border: 1px solid #808F9D;
  border-radius: 12px;
  margin-right: 7px;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 11px;
  margin-bottom: 18px;
`;

const ButtonUnavailable = styled.button`
  background-color: #FBE192;
  border: 1px solid #F7C52B;
  border-radius: 12px;
  margin-right: 7px;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 11px;
  margin-bottom: 18px;
`;

const ButtonSelected = styled.button`
  background-color: #1AAE9E;
  border: 1px solid #0E7D71;
  border-radius: 12px;
  margin-right: 7px;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 11px;
  margin-bottom: 18px;
`;