import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'

function NewIncident() {

    // const [name, setName] = useState('')
    // const [description, setDescription] = useState('')
    // const [value, setValue] = useState(0)

    // function handleSubmit(event) {
    //     event.preventDefault()

    // }

  	return (
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be the Hero"/>

                    <h1>Novo incidente</h1>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={ 25 } color="#E02041"/>
                        Voltar
                    </Link>
                </section>


                <form>
                    <input placeholder="Título"/>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor (R$)"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
  	)
}

export default NewIncident
