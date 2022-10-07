input.onSound(DetectedSound.Loud, function () {
    if (config == 0) {
        if (hours < 10) {
            time = "0" + hours
        } else {
            time = "" + hours
        }
        time = "" + time + ":"
        if (minutes < 10) {
            time = "" + time + "0" + minutes
        } else {
            time = "" + time + minutes
        }
        basic.showString(time)
    }
})
input.onButtonPressed(Button.A, function () {
    if (config == 1) {
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
        basic.showString("" + (hours))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (config == 0) {
        config = 1
        basic.showString("C")
    } else {
        config = 0
        basic.showString("T")
    }
})
input.onButtonPressed(Button.B, function () {
    if (config == 1) {
        if (minutes < 59) {
            minutes += 1
        } else {
            minutes = 0
        }
        basic.showString("" + (minutes))
    }
})
let config = 0
let minutes = 0
let hours = 0
let time = ""
time = ""
hours = 0
minutes = 0
config = 1
input.setSoundThreshold(SoundThreshold.Loud, 10)
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
