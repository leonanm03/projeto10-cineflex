import styled from "styled-components";


export default function Seat({ seat }) {
    // console.log(props)


    return (
        <>
            <Button>{seat.name}</Button>
        </>
    );
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