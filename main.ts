input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 15; index++) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 10)
        basic.pause(2150)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 10)
        basic.pause(2050)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showString("nwqoNIqns")
    basic.pause(500)
})
