import './App.css';
import  React,{Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {


  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }


  const [citas, guardarCita] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas))
      }else{
        localStorage.setItem('citas',JSON.stringify([]));
      }
  }, [citas]);

  const crearCita = cita => {

    guardarCita([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {

      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCita(nuevasCitas);


  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
    <h1>ADMINISTRADOR DE PACIENTES</h1>

    <div className="container">
      <div  className="row">
        <div className="col">
         <Formulario crearCita={crearCita} />
        </div>

        <div className="col">
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita
              key={cita.id} 
              cita = {cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>

      </div>

    </div>



    </Fragment>
  );
  }
export default App;
