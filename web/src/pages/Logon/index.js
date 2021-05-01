import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { Link, useHistory } from 'react-router-dom'
import { appendErrorMessages } from '../../utils/utils'
import { postApi } from '../../services/api'


function Logon() {

    const history = useHistory()
    const [id, setId] = useState('')

    async function formLogon(event) {
        event.preventDefault()

        const formData = {
            id,
        }

        const response = await postApi('ongs/', formData)
        try {
            if (response.id) {
                alert(`Seu ID de acesso: ${ response.id }`)
                history.push('/')
            }
            else alert(`${ appendErrorMessages(response) }`)
        } catch(err) {
            alert(`Erro no cadastro. Tente novamente`)
        }
    }

  	return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Be the Hero"/>
                <form onSubmit={ formLogon }>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" onChange={ e => setId(e.target.value) }/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={ 25 } color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={ heroesImg } alt="Be the Hero"/>
        </div>
  	)
}

export default Logon
