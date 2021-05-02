import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import { getApi } from '../../services/api'


function Incidents() {

    const navigation = useNavigation()
    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident })
    }

    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadIncidents() {
        if (loading) {
            return
        }

        if (total > 0 && incidents.length === total) {
            return
        }

        setLoading(true)

        const response = await getApi(`incidents/?page=${ page }`)

        setIncidents(incidents.concat(response.results))
        setTotal(response.count)
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadIncidents()
    }, [])

 	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg }/>
                <Text style={ styles.headerText }>
                    Total de <Text style={ styles.headerTextBold }>{ total } casos</Text>
                </Text>
            </View>

            <Text style={ styles.title }>Bem-vindo!</Text>
            <Text style={ styles.description }>Escolha um dos casos abaixo e salve o dia.</Text>


            {/* Lista de incidentes, com chave de cada item e sem barra de scroll */}
            <FlatList
                style={ styles.incidentsList }
                showsVerticalScrollIndicator={ true }
                onEndReached={ loadIncidents }
                onEndReachedThreshold={ 0.2 }
                data={ incidents }
                keyExtractor={ incident => String(incident.id) }
                renderItem={ ({item: incident}) => {
                    return (
                        <View style={ styles.incident }>
                            <Text style={ styles.incidentProp }>ONG</Text>
                            <Text style={ styles.incidentValue }>{ incident.ong_name }</Text>

                            <Text style={ styles.incidentProp }>CASO:</Text>
                            <Text style={ styles.incidentValue }>{ incident.title }</Text>

                            <Text style={ styles.incidentProp }>Valor:</Text>
                            <Text style={ styles.incidentValue }>R$ { incident.value.toFixed(2) }</Text>

                            <TouchableOpacity
                                style={ styles.detailsButton }
                                onPress={ () => navigateToDetail(incident) }
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
