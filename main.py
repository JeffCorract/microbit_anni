def on_sound_loud():
    global time
    if config == 0:
        if hours < 10:
            time = "0" + str(hours)
        else:
            time = "" + str(hours)
        time = "" + time + ":"
        if minutes < 10:
            time = "" + time + "0" + str(minutes)
        else:
            time = "" + time + str(minutes)
        basic.show_string(time)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_a():
    global hours
    if config == 1:
        if hours < 23:
            hours += 1
        else:
            hours = 0
        basic.show_string("" + str((hours)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global config
    if config == 0:
        config = 1
        basic.show_string("C")
    else:
        config = 0
        basic.show_string("T")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global minutes
    if config == 1:
        if minutes < 59:
            minutes += 1
        else:
            minutes = 0
        basic.show_string("" + str((minutes)))
input.on_button_pressed(Button.B, on_button_pressed_b)

config = 0
minutes = 0
hours = 0
time = ""
time = ""
hours = 0
minutes = 0
config = 1
input.set_sound_threshold(SoundThreshold.LOUD, 10)

def on_forever():
    global minutes, hours
    basic.pause(60000)
    if minutes < 59:
        minutes += 1
    else:
        minutes = 0
        if hours < 23:
            hours += 1
        else:
            hours = 0
basic.forever(on_forever)
