import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer>
            <div>
                <h2>Sobre PG</h2>
                <ul>
                    <li>Historia</li>
                    <li><a href="">Protección de datos</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
            <div>
                <h2>Únete al grupo</h2>
                <ul>
                    <li>Aporta tu creatividad</li>
                </ul>
            </div>
            <div>
                <h2>¡Sígueme! :)</h2>
                <ul>
                    <li><a href="" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                    <li><a href="https://www.instagram.com/b.santiago12/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                </ul>
            </div>
            <div className="last">
                <h2>¿Quieres subir una foto?<br /> ¡Déjanos tu contacto!</h2>
                <form action="" method="get">
                    <input type="email" placeholder="Email" required id="emailField" />
                    <button id="buttonValidar" type="submit">Suscríbete</button>
                </form>
            </div>
        </footer>
        <footer className="color">
            <div>Developed by Group 3</div>
            <div>Copyright 2023 © Every rigths reserved.</div>
        </footer>
    </div>
  )
}

export default Footer;