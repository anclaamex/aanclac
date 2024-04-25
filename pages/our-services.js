import React from "react";
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard/RecipeCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'service' })

  return {
    props: {
      services: res.items
    }
  }

}

export default function OurServices({ services }) {
  console.log(services);
  return (

    <>

      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="recipe-list">
                {services.map(service => (
                  <RecipeCard key={service.sys.id} service={service} />
                ))}
                <style jsx>{`
                  .recipe-list {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 30px 40px;
                  }

                  @media only screen and (min-width:480px) {
                    .recipe-list {
                      grid-template-columns: 1fr;
                    }
                }
                
                @media only screen and (min-width:768px) {
                  .recipe-list {
                    grid-template-columns: 1fr 1fr;
                  }
                }
                
                @media only screen and (min-width:992px) {
                  .recipe-list {
                    grid-template-columns: 1fr 1fr 1fr;
                  }
                }
                  
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <PageTitleBox /> */}
      {/* <div className="about-box-main">
        <div className="container">
          <h2 className="noo-sh-title">Nuestros Servicios</h2>
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
              <h1 className="noo-sh-title">
              Proveedor de ensayos de aptitud acreditado por EMA para laboratorios de ensayo en la rama química.<span></span>
              </h1>
              <p>
              Subrama Destilados del petróleo
              </p>
              <p>
                
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/nosotros/11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6">
                <h2 className="noo-sh-title">
                <span></span>
                </h2>
                <p>
               
                </p>
                <p>
                  
                </p>
              </div>
              <div className="col-lg-6">
                <h2 className="noo-sh-title">
                <span></span>
                </h2>
                <p>
                
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          <div className="row my-5">
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
          </div>
          <OurTeam />
          <Acreditacion />
        </div>
      </div> */}
    </>
  );
}
