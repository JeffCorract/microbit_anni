bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
basic.forever(function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
