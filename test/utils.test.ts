import { describe, expect, test } from 'vitest'
import { templateString } from '../src/utils/templateString'

describe("Si el texto contiene los caracteres '${}' debe replazar lo que haya dentro por el valore enviado en el segundo parametro", () => {
    const obj = {
        name: "Miguel",
        age: 22,
        live: true,
        boolean: false
    }
    test("Si el valor es de tipo string", () => {
        expect(templateString("Hola ${name}", obj)).toEqual("Hola Miguel")
    })
    test("Si el valor es de tipo numero", () => {
        expect(templateString("Hola ${name} y tengo ${age}", obj)).toEqual("Hola Miguel y tengo 22")
    })
    test("Si el valor es boleando devolvera un 'true' o 'false'", () => {
        expect(templateString("Hola ${name} y mi estado es ${live}", obj)).toEqual("Hola Miguel y mi estado es true")
        expect(templateString("Texto boolean en ${boolean}", obj)).toEqual("Texto boolean en false")
    })
    test("Cuando el valor no exista debera retornar un valor vacio",()=>{
        expect(templateString("Hola mi apellido es ${lastname}", obj)).toBe("Hola mi apellido es ")
    })
})