var socket = io();

socket.on("connect", function () {
    console.log('Connected to server.')

    socket.emit('createMessage', {
        from: 'antonio@gmail.com',
        text: 'Ready! Yes!'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function(message) {
    console.log(`New message from ${message.from}, with the text of "${message.text}"`)
})