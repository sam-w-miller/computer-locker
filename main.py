distance2 = 0
I2C_LCD1602.lcd_init(0)

def on_forever():
    global distance2
    I2C_LCD1602.clear()
    I2C_LCD1602.show_string("Distance is:", 0, 0)
    distance2 = sonar.ping(DigitalPin.P1, DigitalPin.P0, PingUnit.CENTIMETERS)
    basic.pause(1000)
basic.forever(on_forever)
