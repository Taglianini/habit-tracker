import React, { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);

  const AgregarDiv = () => setContador(contadorAntes => contadorAntes + 1);

  return (
    <div>
      <h1>Habitos</h1>
      <button className="boton-div" onClick={AgregarDiv}>
        Agregar
      </button>

      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: contador }, (_, index) => (
          <div key={index} className="generated-div">
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
