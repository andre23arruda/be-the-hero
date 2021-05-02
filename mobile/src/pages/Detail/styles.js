import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 24,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 50,
    },

    incidentProp: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 10,
    },

    heroTitle: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },

    heroDescription: {
        fontSize: 15,
        marginBottom: 15,
        color: '#737380',
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    action: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '48%',
        backgroundColor: '#e02041',
        borderRadius: 8,
    },

    actionText: {
        fontSize: 15,
        textAlign: 'center',
    },




})
