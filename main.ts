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
serial.onDataReceived("1", function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(3)
    music.playMelody("C5 G B A F A C5 B ", 200)
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
