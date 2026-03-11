import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let color1 = "rojo";
let color2 = "amarillo";
let color3 = "verde";

const Home = () => {
  const [color, setColor] = useState("rojo");

  return (

<div className="container-fluid d-flex flex-column align-items-center mt-5">

    <div className="semaforo">
      <div 
        onClick={() => setColor("rojo")}
        className={`rojo ${color === "rojo" ? "brillo" : ""}`}
              ></div>

      <div 
        onClick={() => setColor("amarillo")}
        className={`amarillo ${color === "amarillo" ? "brillo" : ""}`}
      ></div>

      <div 
        onClick={() => setColor("verde")}
        className={`verde ${color === "verde" ? "brillo" : ""}`}
      ></div>
    </div>
	    </div>

  );
};
export default Home;