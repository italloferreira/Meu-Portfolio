import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                
                <a
                    href={html_url}
                    className={styles.botao}
                    target="_blank"
                    rel="noopener noreferrer">
                    <BsArrowRight />
                </a>
                
            </div>
        </section>
    )
}

export default Card
