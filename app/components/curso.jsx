

export default function Curso({cursos}) {
    const {contenido, imagen, titulo} = cursos
    return (
        <div className="curso">
            <style jsx='true'>
                {`
                    .curso {
                        background-image: linear-gradient(to right, rgb(0 0 0 / .5), rgb(0 0 0 / .8)),url(${imagen.data[0].attributes.formats.large.url});
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                `}
            </style>

            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido}</p>
                </div>
            </div>
        </div>
    )
}
