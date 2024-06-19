
import Container from '../../components/Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import foto from './img/foto.jpeg'

function Home() {
  return (
    <>
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou o <br />
              <span>Itallo</span> <br />
              e sou Dev Font-End
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img  className={styles.img_home} src={foto} alt="Imagem de Home" />
          </figure>
        </section>
      </Container>
    </>
  )
}

export default Home
