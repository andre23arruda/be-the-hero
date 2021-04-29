import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

function Register() {

  	return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be the Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={ 25 } color="#E02041"/>
                        Já tenho cadastro
                    </Link>
                </section>


                <form action="">
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF"/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>

        </div>
  	)
}

export default Register
