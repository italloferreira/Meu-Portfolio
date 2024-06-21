
import styles from './Sobre.module.css'
import avatar from './images/programacao.jpg'
import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import dowloud from './images/dowloud.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img  src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Itallo</span> <br />
                    <strong>Dev Front-End</strong> </p>

                    <p>Comecei a mecher com programação desde 2023 no Colégio COTEMIG</p>

                    <p>Estou sempre desenvolvendo e criando projetos para meu aprendizado <br></br>e estudando cada vez mais todos os tipos de linguagens</p>

                    <a href='https://www.canva.com/design/DAGDuwBajMM/bEA42t8hlE_y1b2R8Zyvdw/view?utm_content=DAGDuwBajMM&utm_campaign=designshare&utm_medium=link&utm_source=editor'><button>Veja meu curriculo<img className={styles.imagem} src={dowloud}></img></button></a>

                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                </div>
            </div>

            

        </section>
    )
}

export default Sobre

