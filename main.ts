let distance2 = 0
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Distance is:", 0, 0)
    distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    I2C_LCD1602.ShowNumber(distance2, 12, 0)
    basic.pause(1000)
})
