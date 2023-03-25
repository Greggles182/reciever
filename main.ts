radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # . # #
        # . # . #
        . # . # .
        # . # . #
        # # . # #
        `)
    serial.writeNumber(0)
    basic.pause(750)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(1)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeLine("Started!")
basic.showString("Started!")
