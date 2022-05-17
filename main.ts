input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 10; index++) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 10)
        basic.pause(2700)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 10)
        basic.pause(2700)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
    basic.pause(5000)
})
basic.forever(function () {
    basic.showString("nwqoNIqns")
    basic.pause(500)
})
