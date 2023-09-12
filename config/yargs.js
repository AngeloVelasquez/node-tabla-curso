const color = require("colors")

const argv = require("yargs")
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: color.brightRed.italic('la base de la tabla de multiplicar')   
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: color.brightGreen.italic('Muestra la tabla en consola')
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            console.clear()
            throw color.random('La base debe ser numerica')
        }
        return true
    })
    .argv;

module.exports = argv