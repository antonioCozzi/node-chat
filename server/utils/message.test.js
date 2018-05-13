const expect = require('expect');

var {generateMessage, generateLocationMessage} = require("./message")

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var result = generateMessage('antonio@gmail.com', 'hei there');
        
        expect(result.createdAt).toBeA('number')
        expect(result).toInclude({
            from: 'antonio@gmail.com',
            text: 'hei there'
        })
    })
})

describe('generateLocationMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Deb';
        var latitude = 15;
        var longitude = 14;
        var url = 'https://www.google.com/maps?q=15,14'
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url})
    })
})