input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P2, -1)
    ContinuousServo.spin_one_way(AnalogPin.P0)
    basic.pause(2000)
    ContinuousServo.spin_other_way(AnalogPin.P0)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
