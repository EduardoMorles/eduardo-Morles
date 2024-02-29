//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from "react";

export const Card = ({ player, position }) => {
  return (
    <div
      style={{
        border: "4px solid green",
        width: "400px",
        height: "130px",
        margin: "10px",
        padding: "5px 0px",
      }}
    >
      <h2>Hola {player} !</h2>
      <h3>
        Your position in field is:
        <br />
        {position}{" "}
      </h3>
    </div>
  );
};