function appendErrorMessages(response) {
    var messagesList = []
    for (var fieldError in response) {
        var messages = response[fieldError]
        console.log(messages.join(' '))
        messagesList.push(`${ fieldError }: ${ messages.join(' ') }`)
    }
    return messagesList
}

export { appendErrorMessages }