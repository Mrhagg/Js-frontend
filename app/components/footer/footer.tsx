import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.socialMedia}>
                <a className="btn-social" href="#"><i className="fa-brands fa-facebook"></i></a>
                <a className="btn-social" href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                <a className="btn-social" href="#"><i className="fa-brands fa-square-instagram"></i></a>
                <a className="btn-social" href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className={styles.copyright}>
                 <p>&copy;2024 silicon. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisqie turpis non. Feugiat in odio non nunc ornare consectetur.</p>
            </div>
        </div>
    </footer>
    );
  }
  