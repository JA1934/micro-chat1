radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    radio.sendString("Got It")
})
radio.setGroup(50)
basic.forever(function () {
	
})
