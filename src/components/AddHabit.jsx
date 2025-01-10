import React, { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);

  const sumaLongitud = () => setContador(contador => contador + 1);

  return (
    <div>
      <h1>Habitos</h1>
      <button className="boton-div" onClick={sumaLongitud}>
        Agregar
      </button>

      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: contador }, (_, index) => (
          <div key={index} className="generated-div">
            <label>
              <input type="checkbox" />
               Hábito {index + 1}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
