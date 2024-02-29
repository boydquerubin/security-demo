let chats = [{pin: 123, messages: ['greetings', 'i like dogs']}];

module.exports = {
    createMessage: (req, res) => {
        const {pin, message} = req.body
        console.log(pin, message, chats)
        for(let i = 0; i < chats.length; i++){
            if(chats[i].pin === pin) {
                chats[i].messages.push(message)
                res.status(200).send(chats[i].messages)
            }
        }

    }
};