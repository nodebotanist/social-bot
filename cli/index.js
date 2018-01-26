const LCD = require('adafruit-serial-lcd')
const colorParser = require('parse-color')
const lcd = new LCD({
  port: '/dev/cu.usbmodem14131',
  baud: 9600
})

lcd.start()

const yargs = require('yargs')
  .command('color', 'set the backlight color', (yargs) => { 
    yargs.option({
      'hex': {
        demandOption: true,
        describe: 'Hex color you want to set the backlight to'
      }
    })
  }, (argv) => {
    const color = colorParser(argv.hex).rgb
    lcd.setBacklightColor({
      red: color[0],
      green: color[1],
      blue: color[2]
    })
  }).argv
