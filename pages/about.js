import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
import Acreditacion from "../components/Acreditacion/Acreditacion"
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      {/* <PageTitleBox /> */}
      <div className="about-box-main">
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/nosotros/11.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                Nosotros<span></span>
              </h2>
              <p>
              En <strong>B&B Consulting Training, SA de CV</strong>, somos un Organismo de Evaluación de la Conformidad acreditado por la entidad mexicana de acreditación, AC, como Proveedor de Ensayo de Aptitud con acreditación No. <strong>PEA-ENS-016</strong>
              </p>
              <p>
                
              </p>
            </div>
            {/* <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/nosotros/11.jpg"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div className="row my-5">
            <div className="col-lg-6">
                <h2 className="noo-sh-title">
                Misión<span></span>
                </h2>
                <p>
                Ser la mejor opción en calidad y precio para los Programas de Ensayos de aptitud en las subramas de nuestro alcance acreditado, el mantenimiento y calibración de equipos de laboratorio y capacitación integral referente a la calidad de los petrolíferos.
                </p>
                <p>
                  
                </p>
              </div>
              <div className="col-lg-6">
                <h2 className="noo-sh-title">
                Visión<span></span>
                </h2>
                <p>
                En 2022 nuestra calidad y profesionalismo nos llevarán a ser la empresa preferida por los usuarios, para atender sus necesidades de programación de ensayos de aptitud, capacitación, mantenimiento y calibración de equipos de laboratorio en el territorio Nacional y Centro América.
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          {/* <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Trusted</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Expert</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div> */}
          {/* <OurTeam /> */}
          <Acreditacion />
        </div>
      </div>
    </>
  );
}
