let distance2 = 0
basic.showNumber(0)
basic.forever(function () {
    distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(distance2)
    basic.pause(1000)
})
