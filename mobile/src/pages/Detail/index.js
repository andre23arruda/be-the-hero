import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/core'
import * as MailComposer from 'expo-mail-composer'

function Detail() {

    const navigation = useNavigation()
    function navigateToIncidents() {
        navigation.navigate('Incidents')
    }

	const route = useRoute()
	const incident = route.params.incident

	const message = `Olá ${ incident.ong_name }, gostaria de ajudar no caso "${ incident.title }" com o valor de R$ 120,00.`

	function sendEmail() {
		MailComposer.composeAsync({
			subject: `Herói do caso "${ incident.title }"`,
			recipients: [incident.ong_email],
			body: message,
		})

	}

	function sendMessage() {
		Linking.openURL(`whatsapp://send?phone=55${ incident.ong_whatsapp }&text=${ message }`)

	}

  	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg }/>
				<TouchableOpacity onPress={ navigateToIncidents }>
					<Feather name="arrow-left" size={ 28 } color="#E02041"/>
				</TouchableOpacity>
            </View>

			<View style={ styles.incident }>
				<Text style={ styles.incidentProp }>ONG</Text>
				<Text style={ styles.incidentValue }>{ incident.ong_name } ({ incident.ong_city }-{ incident.ong_uf })</Text>

				<Text style={ styles.incidentProp }>CASO:</Text>
				<Text style={ styles.incidentValue }>{ incident.title }</Text>

				<Text style={ styles.incidentProp }>DESCRIÇÃO:</Text>
				<Text style={ styles.incidentValue }>{ incident.description }</Text>

				<Text style={ styles.incidentProp }>Valor:</Text>
				<Text style={ styles.incidentValue }>R$ { incident.value.toFixed(2) }</Text>
			</View>

			<View style={ styles.contactBox }>
				<Text style={ styles.heroTitle }>Salve o dia!</Text>
				<Text style={ styles.heroTitle }>Seja o herói desse caso.</Text>

				<Text style={ styles.heroDescription }>Entre em contato:</Text>
				<View style={ styles.actions }>
					<TouchableOpacity onPress={ sendMessage } style={ styles.action }>
						<Text style={ styles.actionText }>WhatsApp</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={ sendEmail } style={ styles.action }>
						<Text style={ styles.actionText }>Email</Text>
					</TouchableOpacity>
				</View>
			</View>

        </View>
  	)
}

export default Detail
