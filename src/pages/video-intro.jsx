import React from "react";
import intro from "./intro.css"


function Video(){
  return(
   <>
   <hr className="block-div" />
   <div className="contenedor-video-2">
     <h1 className="title-intro">¡Conoce la Plataforma!</h1>
   </div>
    <div className="contenedor-video">
        <iframe className="video" width="580" height="345" src="https://www.youtube.com/embed/gWwNqmWR4OQ?si=uJgLGMuJZ-4W7FyZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
   </>
    );
}

export default Video;