import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import './Cita.css';

const Cita = ({cita,eliminarCita}) => {
    return ( 
        <Fragment>

            <div className="cita">
                <p>Mascota: <span>{cita.mascota}</span></p>
                <p>Dueño: <span>{cita.dueño}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Síntomas: <span>{cita.sintomas}</span></p>
            </div>
            <button className="button eliminar btn btn-primary btn-lg"
                        onClick={ () => eliminarCita(cita.id) }
                >Eliminar &times;</button>
        </Fragment>
     );
}

Cita.propTypes ={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;