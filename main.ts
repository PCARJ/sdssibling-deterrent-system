input.onGesture(Gesture.Shake, function () {
    seconds = 0
})
let seconds = 0
seconds = 0
basic.forever(function () {
    if (seconds < 10) {
        seconds += 1
        basic.pause(1000)
    } else {
        robotbit.GeekServo(robotbit.Servos.S1, 181)
        seconds = 0
    }
})
