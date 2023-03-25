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
basic.showString("Started!")
