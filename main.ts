input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 15; index++) {
        ContinuousServo.spin_one_way(AnalogPin.P2)
        basic.pause(2000)
        ContinuousServo.spin_other_way(AnalogPin.P2)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    for (let index = 0; index < 1000000000000000; index++) {
        ContinuousServo.turn_off_motor(DigitalPin.P2)
        basic.clearScreen()
    }
})
