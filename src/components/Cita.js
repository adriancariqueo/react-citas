import React from 'react';

const Cita = ({cita, eliminarCita}) =>{

    const { mascota, propietario, fecha, hora, sintomas } = cita;
    return(   
        <div className='cita'>
            <p>Mascota: <span>{mascota}</span></p>
            <p>propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button
                className='button eliminar u-full-width'
                onClick={() => eliminarCita(cita.id)}
            >Eliminar</button>
        </div>
    )
};

export default Cita;