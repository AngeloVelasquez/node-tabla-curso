const color = require("colors")
const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        const name = `tabla-${base}.txt`
        
        let salida = '';
        let consola = '';

        for (let number = 1; number <= hasta; number++) {
            salida += `${base} X ${number} = ${base * number}\n`;
            consola += `${color.magenta(base)} ${color.america("X")} ${number} = ${color.brightCyan(base * number)}\n`;
        }

        if (listar) {
            console.log(color.rainbow("=========================="))
            console.log(color.blue("       Tabla del", base))
            console.log(color.rainbow("=========================="))
            
            console.log(consola)
        }

        fs.writeFileSync(`./salida/${name}`, salida);

        return name
    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}