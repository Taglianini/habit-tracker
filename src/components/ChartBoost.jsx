import { useState } from 'react';

export const ChartBoost = () => {

  const [days, setDays] = useState([ //Necesito manejar el estado del checkbox
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
  ]);

  //Ahora necesito una función que me permita cambiar el estado del checkbox

  const handleCheckboxChange = (id) => {

    const updatedDays = days.map((day) => { //Recorro el array de días
      if (day.id === id) {
        return { ...day, completed: !day.completed }; //Si el id del día es igual al id que estoy pasando, entonces cambio el estado del checkbox
      }
      return day;
    });

    console.log("Estado actualizado de updatedDays:", updatedDays);
    setDays(updatedDays);
  }


  return (
    <>
      <h1>ChartBoost</h1>

      <div>
      {days.map((day) => ( //renderizo los días
        <div key={day.id}>
          <label>
            <input
              type="checkbox"
              checked={day.completed} //Si el día está completado, entonces el checkbox estará marcado
              onChange={() => handleCheckboxChange(day.id)} //Cuando cambie el checkbox, llamo a la función handleCheckboxChange y le paso el id del día
            />
            Día {day.id}
          </label>
        </div>
      ))}
    </div>
  </>
  )
}
