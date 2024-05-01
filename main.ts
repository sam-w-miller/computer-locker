let distance2 = 0
basic.showString("Hi")
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Distance is:", 0, 0)
    distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    led.plotBarGraph(
    distance2,
    200
    )
    I2C_LCD1602.ShowNumber(distance2, 12, 0)
    if (distance2 < 10) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    basic.pause(200)
})
