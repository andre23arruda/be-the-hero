import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import * as MailComposer from 'expo-mail-composer'

function Detail() {

    const navigation = useNavigation()
    function navigateToIncidents() {
        navigation.navigate('Incidents')
    }

	const message = `Olá ONG, gostaria de ajudar no caso "TESTE" com o valor de R$ 120,00.`

	function sendEmail() {
		MailComposer.composeAsync({
			subject: `Herói do caso "TESTE"`,
			recipients: ['andre23arruda@gmail.com'],
			body: message,
		})

	}

	function sendMessage() {
		Linking.openURL(`whatsapp://send?phone=5599999999999&text=${ message }`)

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
				<Text style={ styles.incidentValue }>APAD</Text>

				<Text style={ styles.incidentProp }>CASO:</Text>
				<Text style={ styles.incidentValue }>Cadelinha Atropelada</Text>

				<Text style={ styles.incidentProp }>Valor:</Text>
				<Text style={ styles.incidentValue }>R$ 120,00</Text>
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
