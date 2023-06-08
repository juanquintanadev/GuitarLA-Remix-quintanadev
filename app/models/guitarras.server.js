export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    return await respuesta.json()
}

export async function getGuitarra(model) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${model}&populate=imagen`)
    return await respuesta.json()
}