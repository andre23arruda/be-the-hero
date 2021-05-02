import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'


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


            <FlatList
                style={ styles.incidentsList }
                data={ [1, 2, 3, 4] }
                keyExtractor={ incident => String(incident) }
                renderItem={ () => {
                    return (
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
                    )
                }}
            />
        </View>
  	)
}

export default Incidents
