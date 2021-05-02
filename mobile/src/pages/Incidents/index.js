import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'


function Incidents() {

  	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg }/>
                <Text style={ styles.headerText }>
                    Total de <Text style={ styles.headerTextBold }>0 casos</Text>
                </Text>
            </View>

            <Text style={ styles.title }>Bem-vindo!</Text>
            <Text style={ styles.description }>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={ styles.incidentsList }>
                <View style={ styles.incident }>
                    <Text style={ styles.incidentProp }>ONG</Text>
                    <Text style={ styles.incidentValue }>APAD</Text>

                    <Text style={ styles.incidentProp }>CASO:</Text>
                    <Text style={ styles.incidentValue }>Cadelinha Atropelada</Text>

                    <Text style={ styles.incidentProp }>Valor:</Text>
                    <Text style={ styles.incidentValue }>R$ 120,00</Text>

                    <TouchableOpacity
                        style={ styles.detailsButton }
                        onPress={ () => {} }
                    >
                        <Text style={ styles.detailsButtonText }>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={ 16 } color="#E02041"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  	)
}

export default Incidents