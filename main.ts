basic.showIcon(IconNames.Umbrella)
basic.forever(function () {
    if (input.logoIsPressed()) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        servos.P2.setAngle(90)
        basic.pause(1000)
        servos.P2.setAngle(0)
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    }
})
