import React from "react";
import Layout from "@theme/Layout";
import sidebars from "../../sidebars";
import styleAdmin from "./styleAdmin.css"

//Funcion de logear 
function Logear(){
let user=document.getElementById("user").value;
let psword=document.getElementById("psword").value;

if (user === 'admin' && psword === '123a')
{
  window.open('/blog/2024/04/29');
}
else{
  alert("Usuario o contraeña incorrecta.");
}
}

//Cuerpo del login
const Administrativos = () => {
    return (
        <Layout>
          <form action="">

      <div className="container-forms">
        <div className="data-forms-admins">
        <h1 className="login">Login</h1>

        <input 
        type="text"
         placeholder="Usuario:" 
         className="data-intro" 
         id="user" 
         required>
         </input>

        <input 
        type="password"
         placeholder="Contraseña:" 
         className="data-intro" 
         id="psword" required>
         </input>

        <input type="submit"
         value={"Ingresar"} 
         className="button-forms" 
         onClick={Logear}></input>

        <div className="info-contac">
            <label>¿No puedes ingresar? Contacta a: </label>
            <a href="https://wa.me/message/RSY3GACKA2KTN1" className="contact-sp">Soporte Técnico</a>
            </div> 
      </div> 
      </div>
      </form>
      </Layout>
    );
  };

  //Exportar funcion de administrativos
  export default Administrativos;