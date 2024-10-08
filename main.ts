radio.onReceivedNumber(function (receivedNumber) {
    meter.show(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    meter.use(meter.Styles.Bar, -128, -42)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        radio.sendNumber(2)
    }
})
radio.setGroup(19)
basic.forever(function () {
    radio.sendNumber(1)
})
