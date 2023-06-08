import Guitarra from "./guitarra"

function ListadoGuitarras({guitarras}) {
  return (
    <>
      <h2 className="heading">Guitarras En Stock</h2>
      
      <div className="guitarras-grid">
        {guitarras.map(guitarra => (
          <Guitarra
            guitarra={guitarra?.attributes}
            key={guitarra?.id}
          />
        ))}
      </div>
    </> 
  )
}

export default ListadoGuitarras