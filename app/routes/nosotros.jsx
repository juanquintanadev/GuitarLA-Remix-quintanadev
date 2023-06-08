
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image',
    }
  ]
}

export function meta() {
  return [
    {title: "GuitarLA - Nosotros"},
];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />
        <div>
          <p>Integer tincidunt, turpis id consectetur semper, lorem lorem maximus nisi, id fringilla lectus augue vitae quam. Donec ultrices finibus nisi, sed pharetra elit auctor et. Ut rutrum accumsan enim vitae finibus. Duis efficitur finibus tincidunt</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros