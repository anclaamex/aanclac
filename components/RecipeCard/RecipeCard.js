import Link from 'next/link'
import Image from 'next/image'



export default function RecipeCard({ service }) {
    const { title, slug, seviceTime, thumbnail } = service.fields
    console.log(thumbnail.fields.file.details.image.width);
    return (
        <>

            <div className="cards">
                <div className="featured">
                    <Image
                        src={'https:' + thumbnail.fields.file.url}
                        width={thumbnail.fields.file.details.image.width}
                        height={thumbnail.fields.file.details.image.height}
                    />
                </div>
                <div className="content">
                    <div className="info">
                        <h4>{title}</h4>
                        <p>{seviceTime}</p>
                    </div>
                    <div className="actions">
                        <Link href={'/recipes/' + slug}><a>ver mas</a></Link>
                    </div>
                </div>
                <style jsx>{`
                        .cards {
                        // transform: rotateZ(-1deg);
                        }
                        .content {
                        background: #f8f9fa;
                        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                        margin: 0;
                        position: relative;
                        top: -40px;
                        left: -10px;
                        }
                        .info {
                        padding: 16px;
                        }
                        .info h4 {
                        margin: 4px 0;
                        text-transform: uppercase;
                        }
                        .info p {
                        margin: 0;
                        color: #777;
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
                    `}
                </style>
            </div>


        </>

    )
}