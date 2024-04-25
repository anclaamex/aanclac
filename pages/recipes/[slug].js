import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "service"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'service',
        'fields.slug': params.slug
    })

    return {
        props: { service: items[0] }
    }

}

export default function serviceDetails({ service }) {
    const { featuredImage,title, pdf, method ,services,titleTwo,tituloDeServicios2,servicios2,tituloDeServicios3,servicios3,pdf2,pdf3} = service.fields
    // console.log(method)

    console.log(service)
    return (
        <div className="container">
            <div>
                <div className="banner">
                    <Image
                        src={'https:' + featuredImage.fields.file.url}
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}
                    />
                    <h2>{title}</h2>
                </div>

                <div className="info">
                    {/* <p>Takes about {serviceTime} mins to cook.</p> */}
                    <h3 className="noo-sh-title">{titleTwo}</h3>

                    {services && services.map(ing => (
                        <span key={ing}>
                            <i className="fas fa-check"></i> { ing }
                            <br />
                        </span>
                    ))}
                    <br />
                </div>
                <div>
                    {pdf &&
                        <embed src={'https:' + pdf.fields.file.url} type="application/pdf" width="100%" height="600px" />
                    }   
                </div>
                <div className="info">
                    {/* <p>Takes about {serviceTime} mins to cook.</p> */}
                    <h3 className="noo-sh-title">{tituloDeServicios2}</h3>

                    {servicios2 && servicios2.map(list1 => (
                        <span key={list1}>
                            <i className="fas fa-check"></i> { list1 }
                            <br />
                        </span>
                    ))}
                    <br />
                </div>
                <div>
                    {pdf2 &&
                        <embed src={'https:' + pdf2.fields.file.url} type="application/pdf" width="100%" height="600px" />
                    }   
                </div>

                <div className="info">
                    {/* <p>Takes about {serviceTime} mins to cook.</p> */}
                    <h3 className="noo-sh-title">{tituloDeServicios3}</h3>

                    {servicios3 && servicios3.map(list2 => (
                        <span key={list2}>
                            <i className="fas fa-check"></i> { list2 }
                            <br />
                        </span>
                    ))}
                    <br />
                </div>
                <div>
                    {pdf3 &&
                        <embed src={'https:' + pdf3.fields.file.url} type="application/pdf" width="100%" height="600px" />
                    }   
                </div>

                <div className="method">
                    {/* <h3>Method:</h3> */}
                    <div>{documentToReactComponents(method)}</div>
                </div>
             

                <div className="actions">
                    <Link href="../our-services">
                        <a>regresar</a>
                    </Link>
                </div>
                <br />
                    <br />
                    <br />

                <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }

        .actions {
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
            }
            .actions a {
            color: #fff;
            background: #f5931d;
            padding: 16px 24px;
            text-decoration: none;
            }
      
      `}</style>
            </div>
        </div>
    )
}