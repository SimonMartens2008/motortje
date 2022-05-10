input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 12; index++) {
        ContinuousServo.spin_one_way(AnalogPin.P2)
        basic.pause(2500)
        ContinuousServo.spin_other_way(AnalogPin.P2)
        basic.pause(2500)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
    basic.pause(5000)
})
