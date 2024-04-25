import React from 'react';

const Acreditacion = () => {
    return (
        <div>
        <div className="about-box-main">
            <div className="container">
            <h2 className="noo-sh-title">
               
            </h2>
            <div className="row my-5">
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                "Buques y Puertos: Nodos Vitales del Comercio Mundial"
                </h2>
                <p>
                Los buques, majestuosos gigantes de acero y madera, surcan los océanos como embajadores del comercio mundial. Son las arterias que conectan las naciones, transportando bienes y culturas de puerto en puerto. Los puertos, puertas de entrada al intercambio global, son clave en esta danza de carga y descarga, donde la eficiencia es moneda de cambio. Son centros de actividad frenética, donde se entrelazan tecnología, logística y trabajo humano. La importancia de los puertos radica en su papel vital para el desarrollo económico, la conectividad y la integración de las regiones en la red global de comercio.
                </p>
            
                <br/>
                {/* <p>{t("common:descripcionParrafo6")}</p> 
                <p>{t("common:descripcionParrafo7")}</p> 
                <p>{t("common:descripcionParrafo8")}</p>  */}
                <a style={{
                    color: '#0d6805',
                    textDecoration: 'underline'
                }} 
            href="pdf/PRESENTACION DE OIL TESTING DE MEXICO SA DE CV FRANQUICIA DE SAYBOLT EN MEXICO.pdf" download="PRESENTACION DE OIL TESTING DE MEXICO SA DE CV FRANQUICIA DE SAYBOLT EN MEXICO">Descargar Archivo</a>
                <br/>
            </div>
            
            <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/3660828/pexels-photo-3660828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    />
                </div>
            </div>
        </div>
        <h2 className="noo-sh-title">
                {/* <span>{t("common:title2")}</span> */}
            </h2>
        <div className="row my-5">
        <div className="col-lg-6">
                {/* <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="https://www.oiltesting.com.mx/img/ifia.png"
                    alt=""
                    />
                </div> */}
            </div>
                <div className="col-lg-12">
                {/* <h2 className="noo-sh-title">
                   ¿Porque es importante la terapia física?<span></span>
                </h2> */}
                {/* <p>{t("common:descripcionParrafo4")}</p> */}
                
              
                {/* <div className="actions">
                        <a href="../contact-us">
                        ¡Agenda tu cita!
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
                            .text{
                                color: red; 
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

export default Acreditacion;
