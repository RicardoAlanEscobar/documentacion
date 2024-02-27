import React from "react";
import Layout from "@theme/Layout";
import sidebars from "../../sidebars";


function restringir(){
    let psword;
    psword = prompt("Ingrese la contraseña:");

    if(psword === "admin*!"){
        alert("    ¡Bienvenido! ");
    }
    else{
    alert("Contraseña incorrecta");
    location.reload();  
}

};

function componentes1 (){
return (
 <>
    <Layout>
      <div>
        <h1 style={{margin: '145px'}}>test1</h1>
      </div>
    </Layout>
 </>  
);
};

restringir();



export default componentes1;