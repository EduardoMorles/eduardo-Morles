import { useState } from "react";
import "./App.css";
import { Card } from "./Componentes/Card";

function App() {
  const [player, setPlayer] = useState("");
  const [position, setPosition] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const onChangePlayer = (e) => setPlayer(e.target.value);
  const onChangePosition = (e) => setPosition(e.target.value);

  const espacioEnBlanco = (texto) => {
    let regex = /^\S/;
    return regex.test(texto);
  };

  const isValidPlayer = (player) => {
    const valid = player.trim().length > 2 ? true : false;
    return valid;
  };

  const isValidPosition = (position) => {
    const valid = position.trim().length > 5 ? true : false;
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPlayer(player) && espacioEnBlanco(player) && isValidPosition(position)) {
      setMostrarCard(true);
      setMensaje(false);
    } else {
      setMostrarCard(false);
      setMensaje(true);
    }
  };
  return (
    <>
      <div
        style={{
          border: "12px solid green",
          width: "430px",
          height: "400px",
          marginTop: "10px",
        }}
      >
        <h2>Futbol Team</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Player: </label>
          <input type="text" value={player} onChange={onChangePlayer}></input>
          <br />
          <br />
          <label htmlFor=""> Position: </label>
          <input type="text" value={position} onChange={onChangePosition}></input>
          <br />
          <br />
          <button type="submit">SUBMIT</button>
          <div />
          <br />
        </form>
        {mensaje && (
          <p style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
        {mostrarCard && <Card player={player} position={position} />}
      </div>
    </>
  );
}

export default App;
