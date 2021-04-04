let pinRain = 0
let pinSoil = 0
let pinTouch = 0
let pinFlame = 0
let pinPhoto = 0
let pinTemp = 0
let dgr = 0
let Light = 0
function CW () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P16, index)
        control.waitMicros(20000)
    }
}
function Read_Sensor () {
    pinRain = pins.digitalReadPin(DigitalPin.P7)
    pinSoil = pins.digitalReadPin(DigitalPin.P1)
    pinTouch = pins.digitalReadPin(DigitalPin.P9)
    pinFlame = pins.digitalReadPin(DigitalPin.P6)
    pinPhoto = Math.ceil(Math.map(Math.constrain(pins.analogReadPin(AnalogPin.P4), 340, 700), 340, 700, 0, 10))
    pinTemp = Math.ceil(Math.map(Math.constrain(pins.analogReadPin(AnalogPin.P3), 540, 620), 540, 620, 0, 2))
}
function Export_Data () {
    serial.writeNumber(pinRain)
    serial.writeString(",")
    serial.writeNumber(pinSoil)
    serial.writeString(",")
    serial.writeNumber(pinTouch)
    serial.writeString(",")
    serial.writeNumber(pinFlame)
    serial.writeString(",")
    serial.writeNumber(pinPhoto)
    serial.writeString(",")
    serial.writeNumber(pinTemp)
    serial.writeLine("")
}
function Window_Close () {
    dgr = 90
    for (let index = 0; index < 80; index++) {
        pins.servoWritePin(AnalogPin.P16, dgr)
        dgr += -1
        control.waitMicros(20000)
    }
}
function Fire_Alarm (action: string) {
    if (action == "ON" || action == "on") {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else if (action == "OFF" || action == "off") {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
}
function Window_Open () {
    dgr = 10
    for (let index = 0; index < 80; index++) {
        pins.servoWritePin(AnalogPin.P16, dgr)
        dgr += 1
        control.waitMicros(20000)
    }
}
function Heater (action: string) {
    if (action == "ON" || action == "on") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (action == "OFF" || action == "off") {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
function Windows (action: string) {
    if (action == "O" || action == "o") {
        dgr = 10
        for (let index = 0; index < 80; index++) {
            pins.servoWritePin(AnalogPin.P16, dgr)
            dgr += 1
            control.waitMicros(20000)
        }
    } else if (action == "C" || action == "c") {
        dgr = 90
        for (let index = 0; index < 80; index++) {
            pins.servoWritePin(AnalogPin.P16, dgr)
            dgr += -1
            control.waitMicros(20000)
        }
    }
}
function Fan (action: string) {
    if (action == "ON" || action == "on") {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (action == "OFF" || action == "off") {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
}
function Cloths (action: string) {
    if (action == "O" || action == "o") {
        dgr = 120
        for (let index = 0; index < 100; index++) {
            pins.servoWritePin(AnalogPin.P8, dgr)
            dgr += -1
            control.waitMicros(20000)
        }
    } else if (action == "C" || action == "c") {
        dgr = 20
        for (let index = 0; index < 100; index++) {
            pins.servoWritePin(AnalogPin.P8, dgr)
            dgr += 1
            control.waitMicros(20000)
        }
    }
}
function CCW () {
    for (let index8 = 0; index8 <= 180; index8++) {
        pins.servoWritePin(AnalogPin.P16, 180 - index8)
        control.waitMicros(20000)
    }
}
function lamp (level: number) {
    Light = level
    pins.analogWritePin(AnalogPin.P0, Math.map(Light, 0, 5, 0, 1023))
    basic.pause(500)
}
function Pump (action: string) {
    if (action == "ON" || action == "on") {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (action == "OFF" || action == "off") {
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
}
