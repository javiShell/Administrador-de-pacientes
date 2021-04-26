import React,{Fragment, useState} from 'react';
import './Formulario.css';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {


    const [cita, actualizarCita] = useState({

            mascota:'',
            dueño:'',
            fecha:'',
            hora:'',
            sintomas:''

    });

    const [error, actualizarError] = useState(false);


    const actualizarState = e => {

       actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
       })

    }

    const {mascota,dueño,fecha,hora,sintomas} = cita;

    const submitCita = e => {

        e.preventDefault();

        if(mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === ''|| sintomas.trim() === '' || hora.trim() === '')
            {
                    actualizarError(true);
                    return;
            }

            actualizarError(false);
            cita.id = uuidv4();

            crearCita(cita);

            actualizarCita({
                mascota:'',
                dueño:'',
                fecha:'',
                hora:'',
                sintomas:''
            })



    }

    return (

            <Fragment>
                <h2>Crear Cita</h2>

                { error ? <p className="alert alert-danger">Todos los campos son obligatorios</p> : null }

                <form onSubmit={submitCita}>
                    <label>Nombre de Mascota</label>
                    <input 
                        type="text"
                        name="mascota"
                        className="form-control"
                        placeholder="Nombre de Mascota"
                        onChange={actualizarState}
                        value={mascota}  
                    />
                     <label>Nombre del Dueño</label>
                    <input 
                        type="text"
                        name="dueño"
                        className="form-control"
                        placeholder="Nombre del Dueño"
                        onChange={actualizarState} 
                        value={dueño}     
                    />
                     <label>Fecha</label>
                    <input 
                        type="date"
                        name="fecha"
                        className="form-control"
                        onChange={actualizarState}
                        value={fecha}    
                          
                    />
                     <label>Hora</label>
                    <input 
                        type="time"
                        name="hora"
                        className="form-control" 
                        onChange={actualizarState}
                        value={hora}   
                    />
                    <label>Síntomas</label>
                    <textarea
                        className="form-control"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}    
                    ></textarea>
                    <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                > Agregar cita
                </button>
                </form>
            </Fragment>



     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
} 

export default Formulario;