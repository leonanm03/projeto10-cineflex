import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Seats from "./Seats";
import Sessions from "./Sessions";
import Success from "./Sucess";

function App() {
  const [demand, setDemand] = useState({})

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sessoes/:id" element={<Sessions />}></Route>
        <Route path="/assentos/:id" element={<Seats setDemand={setDemand} />}></Route>
        <Route path="/sucesso" element={<Success demand={demand} />}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Home />
      <Sessions /> 
      <Seats/>
      <Success/> */}

    </div>
  );
}

export default App;
