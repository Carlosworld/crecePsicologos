import React from 'react';


const Info = () => {
    return (
        <div>
        <div className="about-box-main">
            <div className="container">
            <h2 className="noo-sh-title">
                {/* <span>Terapias Físicas</span> */}
            </h2>
            <div className="row my-5">
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                    Atención Psicológica<span></span>
                </h2>
                <p>
                ¿Alguien de tu familia, empresa, comunidad o tú mismo enfrentan situaciones de ansiedad, pérdida, depresión, violencia, conflictos de pareja, abusos sexuales, procesos de duelo y/o secuelas de secuestro, desaparición forzada?
                </p>
                <p>
                   <strong>Brindamos atención psicológica a:</strong>
               </p>
                <ul>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Niños
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Adolescentes
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Adultos
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Parejas
                        </p>
                    </li>
                </ul>    
            </div>
            <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="https://image.freepik.com/vector-gratis/ilustracion-concepto-psicologo_114360-2040.jpg"
                    alt=""
                    />
                </div>
            </div>
        </div>
        <div className="row my-5">
        <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="https://image.freepik.com/vector-gratis/empresaria-ilustracion-portapapeles_106317-195.jpg"
                    alt=""
                    />
                </div>
            </div>
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                Servicios<span></span>
                </h2>
                <p>
                Nuestro equipo de psicólogos ofrece una amplia gama de servicios diseñados para mejorar tu vida, los clasificamos en cuatro grupos principales para que sea más fácil localizar en qué área podemos ayudarte y quién es el especialista adecuado para ti.
                </p>
                <ul>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Atención Psicológica.
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Educación y formación continua
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Evaluaciones Especializadas
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Proyectos Sociales
                        </p>
                    </li>
                </ul>
                {/* <div className="actions">
                        <a href="../our-services">
                        ¡Conoce nuestros servicios!
                        </a>
                </div> */}
                <style jsx>{`
                        .actions {
                            margin-top: 20px;
                            display: flex;
                            justify-content: flex-end;
                            }
                        .actions a {
                            color: #fff;
                            background: #f01b29;
                            padding: 16px 24px;
                            text-decoration: none;

                            margin: 0;
                            display: inline-block;
                            padding: 20px;
                            position: relative;
                            top: -20px;
                            left: -10px;
                            transform: rotateZ(-5deg);
                            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                            }
                            .actions a:hover{ 
                                
                                transform: scale(1.2)
                            }
                    `}
                    </style>
            </div>
         
        </div>
            
            {/* <OurTeam /> */}
        </div>
      </div>
        </div>
    );
}

export default Info;