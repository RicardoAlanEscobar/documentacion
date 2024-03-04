import React from "react";
import intro from "./intro.css"
import mascota from "./img/mascota.gif"


function Intro (){
return (
<>
<div className="contenedor-intro">
 <div className="contenido-izquierdo">
    <h1 className="title-intro">¡Bienvenidos a estos tutoriales de Neuuni!</h1>
    <p className="descripcion-intro">Adéntrate y capacítate con diversos tutoriales para mejorar tu estancia con nosotros.</p>
   <div className="botones-intro">
     <a href="https://cursos.unineuuni.edu.mx/courses/course" className="btn-intro" id="btn-intro1"><b>Plataforma de Neuuni</b></a>
     <a href="https://app.gedux.mx/login" className="btn-intro"><b>Plataforma de pagos</b></a>
   </div>
 </div>
 <div className="contenido-derecho">
    <img src={mascota} alt="none" className="img-intro"/>
 </div>
</div>
<hr className="block-div" />
</>

);

}

export default Intro;
