import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container"> 
        <li className="text-left">
          <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Consultoría psicológica <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                 Te brindaremos al terapeuta indicado para atender tus necesidades y así obtengas ayuda desde tu primer consulta.{" "}
                  {" "}
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    ¿Necesitas ayuda para afrontar los conflictos o los cambios en la vida familiar?<br />
                  </strong>
                </h1>
                <p className="m-b-40">
                La terapia familiar es un tipo de terapia psicológica (psicoterapia) hecha para ayudar a los miembros de la familia a mejorar la comunicación y resolver los conflictos.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Psicoterapia y<br />
                    Apoyo emocional
                  <br />
                  </strong>

                </h1>
                <p className="m-b-40">
                  <br />
                  Encontraremos al terapeuta adecuado para ti. Sin importar cuál sea tu problema, tenemos al experto ideal para ti.
                  {" "}
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="text-right">
          <img src="images/servicios/04-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                  {" "}
                  <br />
                  
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li> */}

      </ul>
      {/* <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div> */}
    </div>
  );
}
